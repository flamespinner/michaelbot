exports.run = (bot, message, args, level) => {
    message.channel.send(" `Bot code is avalable here! Currently on V1.5` http://github.com/flamespinner/michaelbot");
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['twitch'],
    permLevel: 0
};

exports.help = {
    name: 'Twitch',
    description: 'Provides a link to michaelbots GitHub repository!',
    usage: 'twitch'
};
