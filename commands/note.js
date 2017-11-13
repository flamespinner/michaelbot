 message.delete();
        note = args.join(' ');
        notepad = bot.channels.get('350378395709865985')
        noteEmbed = new Discord.RichEmbed()
            .setTimestamp()
            .setColor(message.member.displayHexColor)
            .addField('Server', message.guild.name, true)
            .addField('Channel', message.channel.name, true)
            .addField('Note', note)
        notepad.send({
            embed: noteEmbed
        });
        message.channel.send(`Note **${note}** successfully recorded!`);
        bot.log('Command', chan, bot.user, `Ran notetoself command: ${note}`);
        
        exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['note'],
	permLevel: 10
};

exports.help = {
	name: 'note',
	usage: 'note',
	description: 'make notes'
};
