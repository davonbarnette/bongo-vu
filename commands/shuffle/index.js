const Command = require("../base");
const discord = require("./discord");
const slack = require("./slack");

let params = {
    name: "shuffle",
    aliases: ["sh"],
    description: "Shuffle songs",
}

params.executables = { discord, slack };

module.exports = new Command(params);