const Command = require("../base");
const discord = require("./discord");
const slack = require("./slack");

// Change the name, aliases, and description.
let params = {
    name: "anime-release",
    aliases: ["ar"],
    description: "Shows the anime released on that day. Add another argument with the weekday to show animes released on a specific day.",
}

params.executables = { discord, slack };

module.exports = new Command(params);



