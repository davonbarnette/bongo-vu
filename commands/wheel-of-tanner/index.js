const Command = require("../base");
const discord = require("./discord");
const slack = require("./slack");

// Change the name, aliases, and description.
let params = {
    name: "wheeloftanner",
    aliases: ["wheel"],
    description: "Spin the wheel, let fate decide",
}

params.executables = { discord, slack };

module.exports = new Command(params);



