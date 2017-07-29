exports.run = (bot, message, params, level) => {
    message.channel.send("hi");
    if (!params[0]) {
        const myCommands = bot.commands.filter(c => c.conf.permLevel <= level);
        const commandNames = myCommands.keyArray();
        const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
        let currentCategory = "";
        let output = `= Command List =\n\n[Use ${bot.config.prefix}help <commandname> for details]\n`;
        const sorted = myCommands.sort((p, c) => p.help.category > c.help.category);
        sorted.forEach(c => {
            if (currentCategory !== c.help.category) {
                output += `\n== ${c.help.category}\n`;
                currentCategory = c.help.category;
            }
            output += `${bot.config.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}\n`;
        });
        message.channel.send(output, {
            code: 'asciidoc'
        });
    }/* else {
        let command = params[0];
        if (bot.commands.has(command)) {
            command = bot.commands.get(command);
            message.channel.send(`${command.help.name}\n${command.help.description}\nusage   :: ${bot.config.prefix}${command.help.usage}\naliases :: ${command.conf.aliases.join(', ')}`, {
                code: 'asciidoc'
            });
        }
    }*/
};
exports.conf = {
    enabled: true
    , guildOnly: false
    , aliases: ['h', 'halp']
    , permLevel: 0
};
exports.help = {
    name: 'help'
    , category: 'Utilities'
    , description: 'Displays all the commands avaliable for your permission level'
    , usage: 'help <command [optional]>'
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