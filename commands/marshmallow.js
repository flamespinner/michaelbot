exports.run = (bot, message, args, level) => {
	phrases = [
		'I needed that!',
		'Is it chocolate chip?',
		'Does excalibot get one too?',
		'I\'m glad you appreciate me!',
		'Here! You should take half!',
		'That\'s so sweet!',
		'Does RoBot get one too?',
    'Does Arynbot get one too?'
	];
	phrase = phrases[Math.floor(Math.random() * phrases.length)]
	if (!args[0]) {
		bot.pointsMonitor(bot, message);
		const marshmallowTotal = bot.points.get(bot.user.id).marshmallow;
		message.channel.send(`Thank you very much! ${phrase} I currently have ${marshmallowTotal} cookies, all thanks to users like you! :heart:`)
	} else if (args[0] == 'count') {
		const cookieCount = bot.points.get(message.author.id).marshmallow;
		message.channel.send(`You've given me ${marshmallowCount} marshmallow! Thank you very much! :heart:`)
	}
}

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [':cookie:'],
	botPerms: [],
	memberPerms: []
};

exports.help = {
	name: 'marshmallow',
	description: 'Gives Michaelbot a marshmallow!',
	usage: 'marshmallow'
};
