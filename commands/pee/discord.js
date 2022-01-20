module.exports = async (message, args, client) => {

    let guildQueue = client.player.getQueue(message.guild.id);

    let queue = client.player.createQueue(message.guild.id);
    await queue.join(message.member.voice.channel);
    let play = await queue.play('https://www.youtube.com/watch?v=2BX3mVOwViA')

    message.channel.send(`damn boy, were you just frying chicken in there?`);
}