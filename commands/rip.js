exports.run = (bot, message, args, level) => {
    message.channel.send("😇 RIP 😇");
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['RIP'],
    permLevel: 0
};

exports.help = {
    name: 'rip',
    description: 'rip',
    usage: '+rip'
};