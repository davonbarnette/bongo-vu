const discordIntents = require("./discordIntents");
const Logger = require("../../logger");
const {BaseConsumer, CONSUMER_TYPES} = require("../base");
const {Client, Collection} = require("discord.js");
const {TOKEN, PREFIX} = process.env;
const {DISCORD_EVENTS} = require("./types");
const {Player} = require("discord-music-player");

const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

class DiscordConsumer extends BaseConsumer {

    constructor(commandList) {
        super(commandList, CONSUMER_TYPES.DISCORD);

        this.client = new Client({intents: discordIntents});

        this.client.player = new Player(this.client, {
            leaveOnEmpty: false,
            volume: 65,
        });
        this.client.commands = commandList;

        Logger.success(`Player set`)

        this.client.login(TOKEN);
        this.client.prefix = PREFIX;
        this.client.queue = new Map();

        this.cooldowns = new Collection();

        this.client.on(DISCORD_EVENTS.READY, this.onReady);
        this.client.on(DISCORD_EVENTS.WARN, this.onWarn);
        this.client.on(DISCORD_EVENTS.ERROR, this.onError);
        this.client.on(DISCORD_EVENTS.MESSAGE, (this.onMessage));
    }

    onReady = () => {
        Logger.success(`${this.client.user.username} ready!`)
        this.client.user.setActivity(`${PREFIX}help`)
    }

    onWarn = (info) => {
        Logger.warn(info)
    }

    onError = (err) => {
        Logger.error(err);
    }

    onMessage = async (message) => {
        Logger.debug("Received message", message.content);
        if (message.author.bot) {
            return;
        }
        if (!message.guild) {
            return Logger.error("No guild in the message.")
        }

        const prefixRegex = new RegExp(`^(<@!?${this.client.user.id}>|${escapeRegex(PREFIX)})\\s*`);
        if (!prefixRegex.test(message.content)) return;

        const [, matchedPrefix] = message.content.match(prefixRegex);

        const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        const command =
            this.commandList.get(commandName) ||
            this.commandList.find((cmd) => {
                return cmd.aliases && cmd.aliases.includes(commandName)
            });

        if (!command) {
            return Logger.error("No command found for: ", commandName)
        }

        if (!this.cooldowns.has(command.name)) {
            this.cooldowns.set(command.name, new Collection());
        }

        const now = Date.now();
        const timestamps = this.cooldowns.get(command.name);
        const cooldownAmount = (command.cooldown || 1) * 1000;

        if (timestamps.has(message.author.id)) {
            const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

            if (now < expirationTime) {
                const timeLeft = (expirationTime - now) / 1000;
                return message.reply(
                    `please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`
                );
            }
        }

        timestamps.set(message.author.id, now);
        setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

        try {
            if (command.executables.discord) {
                await command.executables.discord(message, args, this.client);
            } else {
                Logger.error("No execution function for specified command: ", this.name);
            }
        } catch (error) {
            Logger.error(error);
            message.reply("There was an error executing that command.").catch(console.error);
        }
    }

}

module.exports = DiscordConsumer;