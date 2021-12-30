module.exports = async (message, args, client) => {

    let guildQueue = client.player.getQueue(message.guild.id);
    message.channel.send(`Now playing: ${guildQueue.nowPlaying}`)

}