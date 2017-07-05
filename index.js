const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");

bot.login("config.token");

bot.on("ready", () => {
    console.log("I am ready!");
    bot.user.setGame("with Aryn 💑");
});

bot.on("message", (message) => {

    if (!message.content.startsWith(config.prefix) || message.another.bot) return;


  if (message.content.startsWith(config.prefix + "ping")) {
    message.channel.send("pong!");
    console.log("Ping Pong!");
  } else

  if (message.content.startsWith(config.prefix + "coin")) {
      message.channel.send("flip!");
      console.log("Coin Flipped!"); /* */
  }
});
