const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
const newUsers = new Discord.Collection();

bot.login(config.token);

bot.on("ready", () => {
	console.log("I am ready!");
	bot.user.setGame("with Aryn ;)");
});

bot.on("guildMemberAdd", (member) => {
	console.log(`New User "${member.user.username}" has joined "${member.guild.name}"`);
	member.guild.defaultChannel.send(`Welcome ${member.user.username} to ${member.guild.name}`);
});

/*bot.on("guildMemberAdd", (member) => {
    newUsers.set(member.id, member.user);
    //console.log(member.id, member.user);
    const guild = member.guild

    console.log("NewUsers: " + newUsers);
    console.log("member.guild: " + member.guild);
    console.log("Welcome" + member.user + member.guild);

    message.channel.send("Welcome" + member.user + member.guild);

    /*(if (newUsers.size = 1) {
        const userlist = newUsers.map(u => u.toString()).join(" ");
        guild.defaultChannel.send("Welcome " + userlist);
        newUsers.clear();
    }*/
//}); 

bot.on("message", (message) => {

	if (message.author.id == config.ownerID) {
		console.log("This works");
		if (message.content.startsWith("Jarvis")) {
			message.channel.send("Yes Sir");
			console.log("Yes Sir");
		}
	}

	if (!message.content.startsWith(config.prefix) || message.author.bot) return;


	if (message.content.startsWith(config.prefix + "ping")) {
		message.channel.send("pong!");
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
