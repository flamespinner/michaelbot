exports.run = async(bot, message, args, level) => {
    message.channel.send("😇 RIP 😇");
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [rip],
    permLevel: 0
};

exports.help = {
    name: 'RIP',
    description: 'RIP',
    usage: 'RIP or rip'
};