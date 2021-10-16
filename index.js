if (process.env.NODE_ENV !== "production"){
    require("dotenv").config();
}

const DiscordConsumer = require("./consumers/discord");
const SlackConsumer = require("./consumers/slack");
const commandList = require("./commandList");

class BongoVuSingleton {

    constructor() {
        this.discordConsumer = new DiscordConsumer(commandList);
        this.slackConsumer = new SlackConsumer(commandList);
    }

}

const BongoVu = new BongoVuSingleton();


