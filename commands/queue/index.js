const Command = require("../base");
const discord = require("./discord");
const slack = require("./slack");

// Change the name, aliases, and description.
let params = {
    name: "queue",
    aliases: ["q"],
    description: "Get the queue",
}

params.executables = { discord, slack };

module.exports = new Command(params);



