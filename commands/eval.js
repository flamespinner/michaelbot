const Discord = require("discord.js");
exports.run = async(bot, message, args, level) => {
    //if (msg.author.id != require('../config.json').ownerID) return msg.reply("you are not allowed to do this!")
    const code = args.join(" ");
    try {
        const evaled = eval(code);
        const clean = await bot.clean(bot, evaled);
        message.channel.send(`\`\`\`xl\n${clean}\n\`\`\``);
    } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${await bot.clean(bot, err)}\n\`\`\``);
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Eval', 'test', 'Test'],
    permLevel: 10
};

exports.help = {
    name: 'eval',
    description: 'Evaluates arbitrary javascript.',
    usage: '+eval <code>'
};
