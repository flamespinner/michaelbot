exports.run = (bot, message, params, level) => {
        message.author.send(" ''' " + "test" + " ''' ")
        code: 'asciidoc'
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['h', 'halp'],
    permLevel: 0
};

exports.help = {
    name: 'help',
    description: 'Displays all the commands avaliable for your permission level',
    usage: 'help <command [optional]>'
};