const child_process = require('child_process');
exports.run = (bot, msg, args) => {
    if(msg.author.id != require('../config.json').ownerID) return msg.reply("you are not allowed to do this!") 
        msg.channel.send("According to all known laws of aviation...");
        msg.channel.send("there is no way a bee should be able to fly.");
        msg.channel.send("Its wings are too small to get its fat little body off the ground.");
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Bee'],
    permLevel: 0
};

exports.help = {
    name: 'bee',
    usage: 'bee',
    description: 'Pulls new changes from Github and restarts.'
};
