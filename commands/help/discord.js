const { MessageEmbed } = require("discord.js");

module.exports = async (message) => {
    let commands = message.client.commands.map(c => c);

    let helpEmbed = new MessageEmbed()
        .setTitle("Boit Mommy's here to help")
        .setDescription("List of all commands")
        .setColor("#F8AA2A");

    commands.forEach((cmd) => {
        helpEmbed.addField(
            `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
            `${cmd.description}`,
            true
        );
    });

    helpEmbed.setTimestamp();

    return message.channel.send({ embeds: [helpEmbed] }).catch(console.error);


}