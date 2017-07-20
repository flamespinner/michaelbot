const bee = require('../modules/beemovie.json');
exports.run = (bot, msg, args) => {
	if (msg.author.id != require('../config.json').ownerID) return msg.reply("you are not allowed to do this!")
	for(let i = 0; i < bee.length; i++) {
		setTimeout(function() {
			msg.channel.send(bee[i]);
		}, (i+1) 500);
	}
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['Bee'],
	permLevel: 0
};

exports.help = {
	name: 'bee',
	usage: 'bee',
	description: 'just... no'
};