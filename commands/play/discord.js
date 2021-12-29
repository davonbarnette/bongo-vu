const COLORS = require("../../util/colors");

const {MessageEmbed} = require("discord.js");

module.exports = async (message, args, client) => {

    let guildQueue = client.player.getQueue(message.guild.id);

    let queue = client.player.createQueue(message.guild.id, {
        data: {message}
    });
    await queue.join(message.member.voice.channel);
    let song = await queue.play(args.join(' ')).catch(_ => {
        if (!guildQueue) {
            queue.stop();
        }
    });

    let helpEmbed = new MessageEmbed()
        .setTitle("Song added to the queue")
        .setDescription("Type !help for commands.")
        .setColor(COLORS.SUCCESS)
        .setImage(song.thumbnail)

    helpEmbed.addField(
        `${song}`,
        `Author: ${song.author}\nDuration: ${song.duration}\n${song.url}`,
        true
    );

    message.channel.send({embeds: [helpEmbed]})

}