exports.run = (bot, message, args, level) => {
    message.channel.send("SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM", {
        file: "https://cdn.discordapp.com/attachments/336353680393502742/336687668903542785/unknown.png" // Or replace with FileOptions object
    });
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['spam', 'Spam'],
    permLevel: 0
};

exports.help = {
    name: 'Spam',
    description: 'Spam',
    usage: 'Spam'
};