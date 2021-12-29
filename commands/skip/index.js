const Command = require("../base");
const discord = require("./discord");
const slack = require("./slack");

let params = {
    name: "skip",
    aliases: ["sk"],
    description: "Skip a song",
}

params.executables = { discord, slack };

module.exports = new Command(params);



