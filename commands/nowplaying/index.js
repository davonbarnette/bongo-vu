const Command = require("../base");
const discord = require("./discord");
const slack = require("./slack");

// Change the name, aliases, and description.
let params = {
    name: "nowplaying",
    aliases: ["np"],
    description: "Get the current song",
}

params.executables = { discord, slack };

module.exports = new Command(params);



