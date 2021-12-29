module.exports = async (message, args, client) => {

    let guildQueue = client.player.getQueue(message.guild.id);
    guildQueue.setVolume(parseInt(args[0]));
    message.channel.send("New volume: ", parseInt(args[0]))

}