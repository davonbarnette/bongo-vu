module.exports = async (message, args, client) => {

    let guildQueue = client.player.getQueue(message.guild.id);
    guildQueue.setPaused(false);
    message.channel.send("Music has been resumed.")
}