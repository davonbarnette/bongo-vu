const Command = require("../base");
const discord = require("./discord");
const slack = require("./slack");

// Change the name, aliases, and description.
let params = {
    name: "template-command",
    aliases: ["tc"],
    description: "Change this",
}

params.executables = { discord, slack };

module.exports = new Command(params);



