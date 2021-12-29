module.exports = async (message, args, client) => {

    let guildQueue = client.player.getQueue(message.guild.id);
    guildQueue.skip();

    message.channel.send("Skipping to next song.")
}