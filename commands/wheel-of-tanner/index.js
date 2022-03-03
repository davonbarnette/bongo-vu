const Command = require("../base");
const discord = require("./discord");

// Change the name, aliases, and description.
let params = {
    name: "wheeloftanner",
    aliases: ["wheel"],
    description: "Spin the wheel, let fate decide",
}

params.executables = { discord };

module.exports = new Command(params);



