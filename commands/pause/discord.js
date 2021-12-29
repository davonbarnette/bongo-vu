module.exports = async (message, args, client) => {

    let guildQueue = client.player.getQueue(message.guild.id);
    guildQueue.setPaused(true);
    message.channel.send("Music has been paused.")

}