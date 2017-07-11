exports.run = async(bot, message, args, level) => {
    if (message.content.startsWith(config.prefix + "ping")) {
        message.channel.send(`Pong! Your ping is \`${Math.round(bot.ping)}\` ms`);
        console.log("Ping Pong!");
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'ping',
    description: 'Simple test to see if I am responding!',
    usage: 'ping'
};