const COLORS = require("../../util/colors");
const {MessageEmbed} = require("discord.js");
const utils = require("../../util/utils");

module.exports = async (message, args, client) => {

    let decision = utils.pickRandomElement(args);

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