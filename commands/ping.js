exports.run = async(bot, message, args, level) => {
//    if (message.content.startsWith(config.prefix + "ping")) {
        message.channel.send(`Pong! Your ping is \`${Math.round(bot.ping)}\` ms`);
//        console.log("Ping Pong!"); the bot.log stuff already logs all commands used and such
//    } you dont need an if statement because the if statement is already included in the message.js folder. if its gotten to this part, the code has already established that the message started with !ping
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