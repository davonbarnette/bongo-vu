const Command = require("../base");
const discord = require("./discord");
const slack = require("./slack");

let params = {
    name: "playlist",
    aliases: ["pl"],
    description: "Play a playlist",
}

params.executables = { discord, slack };

module.exports = new Command(params);



