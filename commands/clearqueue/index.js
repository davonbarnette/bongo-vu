const Command = require("../base");
const discord = require("./discord");
const slack = require("./slack");

// Change the name, aliases, and description.
let params = {
    name: "clearqueue",
    aliases: ["cq"],
    description: "Clear the queue",
}

params.executables = { discord, slack };

module.exports = new Command(params);



