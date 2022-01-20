const Command = require("../base");
const discord = require("./discord");

let params = {
    name: "pee",
    aliases: ["pp"],
    description: "Play a special audio track if someone keeps their mic on in the bathroom",
}

params.executables = { discord };

module.exports = new Command(params);