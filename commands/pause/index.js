const Command = require("../base");
const discord = require("./discord");
const slack = require("./slack");

// Change the name, aliases, and description.
let params = {
    name: "pause",
    aliases: ["ps"],
    description: "Pause a song",
}

params.executables = { discord, slack };

module.exports = new Command(params);



