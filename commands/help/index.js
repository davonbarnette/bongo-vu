const Command = require("../base");
const discord = require("./discord");
const slack = require("./slack");

let params = {
    name: "help",
    aliases: ["h"],
    description: "Display all commands and descriptions",
}

params.executables = { discord, slack };

module.exports = new Command(params);



