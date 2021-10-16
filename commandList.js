const translate = require("./commands/translate")
const {Collection} = require("discord.js")

let commandList = new Collection();

commandList.set(translate.name, translate);

module.exports = commandList;