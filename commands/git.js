exports.run = (bot, message, args, level) => {
    message.channel.send(" `Bot code is avalable here! Currently on V1.5` http://github.com/flamespinner/michaelbot");
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['github', 'gh', 'repo'],
    permLevel: 0
};

exports.help = {
    name: 'git',
    description: 'Provides a link to michaelbots GitHub repository!',
    usage: 'git'
};