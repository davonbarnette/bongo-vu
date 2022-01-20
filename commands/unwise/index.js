const Command = require("../base");
const discord = require("./discord");

let params = {
    name: "Got me acting unwise",
    aliases: ["unwise"],
    description: "Arr arr rr",
}

params.executables = { discord };

module.exports = new Command(params);