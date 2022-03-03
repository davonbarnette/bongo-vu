const JikanV4API = require("../../api/Jikan/JikanAPI");
const COLORS = require("../../util/colors");
const {MessageEmbed} = require("discord.js");

module.exports = async (message, args) => {

    let inputDay = args[0];
    if (!inputDay) {
        inputDay = new Date().toLocaleString('en-us', {weekday: 'long'})
    }
    inputDay = inputDay.toLowerCase();

    let animeReleased = await JikanV4API.getSchedules(inputDay);

    let helpEmbed = new MessageEmbed()
        .setTitle(`Searching for animes released on ${inputDay}`)
        .setDescription("Type !help for commands.")
        .setColor(COLORS.SUCCESS)


    animeReleased = animeReleased.filter(a => a.title_english !== null);

    animeReleased.forEach(a => {
        helpEmbed.addField(
            a.title_english,
            a.url,
            true
        );
    })
    console.log(animeReleased.length);

    return message.channel.send({embeds: [helpEmbed]})
}