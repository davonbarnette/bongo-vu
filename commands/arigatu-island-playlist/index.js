const Command = require("../base");
const discord = require("./discord");

let params = {
    name: "arigatu-island-playlist",
    aliases: ["aip"],
    description: "Play the AI's collaborative playlist",
}

params.executables = { discord };

module.exports = new Command(params);