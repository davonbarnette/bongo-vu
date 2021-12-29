if (process.env.NODE_ENV !== "production"){
    require("dotenv").config();
}
const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.send('Success')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const DiscordConsumer = require("./consumers/discord");
const SlackConsumer = require("./consumers/slack");
const commandList = require("./commandList");

class BongoVuSingleton {

    constructor() {
        this.discordConsumer = new DiscordConsumer(commandList);
        this.slackConsumer = new SlackConsumer(commandList);
    }

}

const BongoVu = new BongoVuSingleton();


