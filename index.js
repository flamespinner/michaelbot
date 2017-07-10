const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
const newUsers = new Discord.Collection();

bot.login(config.token);

bot.on("ready", () => {
	console.log("I am ready!");
	bot.user.setGame("I am gay");
});

bot.on("guildMemberAdd", (member) => {
    member.guild.defaultChannel.send(`Welcome ${member.user} to ${member.guild.name}`);
});

bot.on("message", (message) => {

	if (message.author.id == config.ownerID) {
		if (message.content.startsWith("Jarvis")) {
			message.channel.send("Yes Sir");
		}
	}

	if (!message.content.startsWith(config.prefix) || message.author.bot) return;

	if (message.content.startsWith(config.prefix + "ping")) {
        message.channel.sendMessage(`Pong! Your ping is \`${bot.ping}\` ms`);
        console.log("Ping Pong!");
    } else

	if (message.content.startsWith(config.prefix + "coin")) {
		message.channel.send("flip!");
		console.log("Coin Flipped!");
	} else

	if (message.content.toLowerCase().startsWith(config.prefix + "rip")) {
		message.channel.send("😇 RIP 😇");
		console.log("someone died");
	}
	
	//if(message.author.id !== config.ownerID) return;
});
