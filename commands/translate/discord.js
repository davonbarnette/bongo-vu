const DiscordTranslationEmbedManager = require("./utils/DiscordTranslationEmbedManager");

module.exports = async (message) => {
    let {content} = message;
    let removedNameArray = content.split(" ").slice(1);
    let text = removedNameArray.join("");

    let translationEmbedManager = new DiscordTranslationEmbedManager({text, targetLanguage: 'en'})
    await translationEmbedManager.addDetectionLanguage();
    await translationEmbedManager.addTranslations();

    return message.channel.send({
        embeds: [translationEmbedManager.messageEmbed]
    }).catch(console.error);
}