exports.run = async(bot, message, args, level) => {
    message.channel.send("flop!");
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [Flip],
    permLevel: 0
};

exports.help = {
    name: 'flip',
    description: 'Flip a coin (Beta)',
    usage: 'flip'
};