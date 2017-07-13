
exports.run = (bot, message, params, level) => {
        message.author.send("test");
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['hp', 'halpp'],
    permLevel: 0
};

exports.help = {
    name: 'helpp',
    description: 'Displays all the commands avaliable for your permission level',
    usage: 'helpp <command [optional]>'
};