module.exports = async (message, args, client) => {

    let guildQueue = client.player.getQueue(message.guild.id);

    let queue = client.player.createQueue(message.guild.id);
    await queue.join(message.member.voice.channel);
    let playlist = await queue.playlist('https://open.spotify.com/playlist/4GZfA8Rn7jYLm6UURLNPJp?si=a9df92e08308452e')

    message.channel.send(`Playlist ${playlist} with ${playlist.songs.length} was added to the queue.`);
}