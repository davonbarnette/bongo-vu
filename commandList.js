const translate = require("./commands/translate");
const play = require("./commands/play");
const stop = require("./commands/stop");
const clearqueue = require("./commands/clearqueue");
const getvolume = require("./commands/getvolume");
const pause = require("./commands/pause");
const playlist = require("./commands/playlist");
const progress = require("./commands/progress");
const resume = require("./commands/resume");
const setvolume = require("./commands/setvolume");
const skip = require("./commands/skip");
const queue = require("./commands/queue");
const help = require("./commands/help");
const nowplaying = require("./commands/nowplaying");
const shuffle = require("./commands/shuffle");
const arigatuIslandPlaylist = require("./commands/arigatu-island-playlist");
const pee = require("./commands/pee");
const unwise = require("./commands/unwise");
const wheeloftanner = require("./commands/wheel-of-tanner");
const animeRelease = require("./commands/anime-release");

const {Collection} = require("discord.js");

let commandList = new Collection();

commandList.set(translate.name, translate);
commandList.set(play.name, play)
commandList.set(stop.name, stop)
commandList.set(clearqueue.name, clearqueue)
commandList.set(getvolume.name, getvolume)
commandList.set(pause.name, pause)
commandList.set(playlist.name, playlist)
commandList.set(progress.name, progress)
commandList.set(resume.name, resume)
commandList.set(setvolume.name, setvolume)
commandList.set(skip.name, skip)
commandList.set(queue.name, queue)
commandList.set(help.name, help)
commandList.set(nowplaying.name, nowplaying)
commandList.set(shuffle.name, shuffle)
commandList.set(arigatuIslandPlaylist.name, arigatuIslandPlaylist)
commandList.set(pee.name, pee)
commandList.set(unwise.name, unwise)
commandList.set(wheeloftanner.name, wheeloftanner)
commandList.set(animeRelease.name, animeRelease)


module.exports = commandList;