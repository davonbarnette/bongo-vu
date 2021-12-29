module.exports = async (message, args, client) => {

    let guildQueue = client.player.getQueue(message.guild.id);
    guildQueue.stop();
    message.channel.send("Music has been stopped.")

}