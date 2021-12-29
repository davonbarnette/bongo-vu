module.exports = async (message, args, client) => {

    let guildQueue = client.player.getQueue(message.guild.id);
    const ProgressBar = guildQueue.createProgressBar();

    // [======>              ][00:35/2:20]
    message.channel.send(ProgressBar.prettier);

}