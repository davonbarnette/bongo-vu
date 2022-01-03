module.exports = async (message, args, client) => {

    let guildQueue = client.player.getQueue(message.guild.id);
    guildQueue.shuffle();

    message.channel.send("Music has been shuffled.")
}