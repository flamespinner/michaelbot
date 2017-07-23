exports.run = (bot, message, args, level) => {
    message.channel.sendMessage("some text", {
        file: "https://cdn.discordapp.com/attachments/336353680393502742/336687668903542785/unknown.png" // Or replace with FileOptions object
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