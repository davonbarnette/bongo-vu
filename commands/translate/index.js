const Command = require("../base");
const discord = require("./discord");
const slack = require("./slack");

let params = {
    name: "translate",
    aliases: ["tr"],
    description: "Translates from English to Japanese and vice-versa.",
}

params.executables = { discord, slack};

module.exports = new Command(params);



