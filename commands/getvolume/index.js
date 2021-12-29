const Command = require("../base");
const discord = require("./discord");
const slack = require("./slack");

// Change the name, aliases, and description.
let params = {
    name: "getvolume",
    aliases: ["gv"],
    description: "Get the volume",
}

params.executables = { discord, slack };

module.exports = new Command(params);



