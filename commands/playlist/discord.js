module.exports = async (message, args, client) => {

    let guildQueue = client.player.getQueue(message.guild.id);

    let queue = client.player.createQueue(message.guild.id);
    await queue.join(message.member.voice.channel);
    let playlist = await queue.playlist(args.join(' ')).catch(_ => {
        if (!guildQueue)
            queue.stop();
    });
    message.channel.send(`Playlist ${playlist} with ${playlist.songs.length} was added to the queue.`);

}