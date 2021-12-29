const Command = require("../base");
const discord = require("./discord");
const slack = require("./slack");

// Change the name, aliases, and description.
let params = {
    name: "progress",
    aliases: ["pg"],
    description: "Progress of current song",
}

params.executables = { discord, slack };

module.exports = new Command(params);



