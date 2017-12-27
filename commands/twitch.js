exports.run = (bot, message, args, level) => {
    message.channel.send("http://twitch.tv/Agent_Flame");
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['twitch'],
    permLevel: 0
};

exports.help = {
    name: 'twitch',
    description: 'Provides a link to Agent Flame's Twitch',
    usage: 'twitch'
};
