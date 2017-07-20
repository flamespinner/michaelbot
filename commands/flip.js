exports.run = async(bot, message, args, level) => {
    message.channel.send("flop!");
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'flip',
    description: 'Coin Flip Beta',
    usage: 'flip'
};