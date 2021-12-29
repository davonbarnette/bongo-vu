module.exports = async (message, args, client) => {

    let guildQueue = client.player.getQueue(message.guild.id);
    guildQueue.clearQueue();
    message.channel.send("Queue has been cleared.")

}