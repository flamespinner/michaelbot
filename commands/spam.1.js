exports.run = (bot, message, args, level) => {
    message.channel.sendMessage("some text", {
        file: "http://link.to/your.file" // Or replace with FileOptions object
    });
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['rip', 'RIP'],
    permLevel: 0
};

exports.help = {
    name: 'rip',
    description: 'rip',
    usage: 'rip'
};