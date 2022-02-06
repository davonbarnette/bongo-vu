const COLORS = require("../../util/colors");
const {MessageEmbed} = require("discord.js");
const utils = require("../../util/utils");

module.exports = async (message, args, client) => {

    let decision = utils.pickRandomElement(args);

    let guildQueue = client.player.getQueue(message.guild.id);

    let queue = client.player.createQueue(message.guild.id);
    await queue.join(message.member.voice.channel);
    let play = await queue.play('https://www.youtube.com/watch?v=2WaDvi11hmA');


    let wheelEmbed = new MessageEmbed()
        .setTitle("The Wheel of Tanner")
        .setDescription("and the winner is...")
        .setColor(COLORS.SUCCESS)

    wheelEmbed.addField(
        `🔴🟠🟡🟢🔵🟣`,
        `${decision}`,
        `🟣🔵🟢🟡🟠🔴`,
        true
    );

    return message.channel.send({
        embeds: [wheelEmbed]
        , files: [{
            attachment: '../../media/wheeloftanner.gif',
            name: 'wheeloftanner.gif',
            description: 'heh'
          }]
    })

}