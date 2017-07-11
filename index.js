const discord = require("discord.js");
const { promisify } = require('util');
const readdir = promisify(require("fs").readdir);
const config = require("./config.json");
const bot = new discord.Client();

require("./modules/functions.js")(bot);

bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();
const newUsers = new discord.Collection();



(async function() {

    const commandFiles = await readdir('./commands/');
    bot.login("log", `Loading ${commandFiles.length} commands!`);
    commandFiles.forEach(f => {
        try {
            let commandFile = require(`./commands/${f}`);
            bot.log("log", `Loading the ${commandFile.help.name} command!`);
            bot.commands.set(commandFile.help.name, commandFile);
            commandFile.conf.aliases.forEach(alias => {
                bot.aliases.set(alias, commandFile.help.name);
            });    
        } catch (e) {
            bot.log(`Unable to load command ${f}: ${e}`);
        }
    });

    const eventFiles = await readdir('./events/');
    bot.login("log", `Loading ${eventFiles.length} events!`);
    eventFiles.forEach(file => {
        const eventName = file.split(".")[0];
        const event = require(`./events/${file}`);
        bot.on(eventName, event.bind(null, bot));
        delete require.cache[require.resolve(`./events/${file}`)];
    });

    bot.login(config.token);

}());





/*

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
        message.channel.send(`Pong! Your ping is \`${Math.round(bot.ping)}\` ms`);
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
});*/
