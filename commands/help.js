exports.run = async(bot, message, args, level) => {
    const Discord = require("discord.js");    
    var banee = message.mentions.users.array()[0];
    var banned = message.guild.members.get(banee.id);
    if (args.length == 1) {
        var reason = "Not specified";
    } else {
        var reason = args.slice(1).join(" ");
    };    
    banned.ban(reason);
    var ban = new Discord.RichEmbed();
        ban.setTitle('User was banned.')
        .addField('User', banee, true)
        .addField('Banned by', message.author, true)
        .addField('Reason', reason)
        .setFooter("BANNED")
        .setTimestamp()
        .setColor('#E53935')
    message.channel.send({embed: ban})
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 10
};
exports.help = {
    name: 'ban',
    description: 'Bans a member.',
    usage: 'ban @<member to be banned> <reason for banning>'
};
/*exports.run = (bot, message, params, level) => {
    const Discord = require('discord.js');
    if (!params[0]) {
        const myCommands = bot.commands.filter(c => c.conf.permLevel <= level);
        var helpbox = new Discord.RichEmbed();
        helpbox.setTitle("Command List")
               .setDescription(`Use ${bot.config.prefix}help <commandname> for details`)
               .setColor([Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256)])
        myCommands.forEach(c => {
            helpbox.addField(c.help.name, c.help.description)
        }
    );
        message.channel.send({embed: helpbox});
    } else {
        let command = params[0];
        if (bot.commands.has(command)) {
            command = bot.commands.get(command);
            var helpCommand = new Discord.RichEmbed();
            helpCommand.setTitle(command.help.name)
            .addField('Description', `${command.help.description}`)
            .addField('Usage', `${bot.config.prefix}${command.help.usage}`)
            .setColor([Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256)])
            if (command.conf.aliases != "") {
                helpCommand.addField('Aliases', `${command.conf.aliases.join(', ')}`)
            }
            message.channel.send({embed: helpCommand});
        };
    };
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['help', 'Help'],
    permLevel: 0
};

exports.help = {
    name: 'Help',
    description: 'Spam',
    usage: 'Help'
};*/