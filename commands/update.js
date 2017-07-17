const child_process = require('child_process');
//exports.run = (bot, message, args) => {
module.exports = (bot, message, args) => {
    if(msg.author.id != require('../config.json').ownerID) return msg.reply("you are not allowed to do this!")
        msg.channel.send("Updating...").then(function (e) {
            var evaled = child_process.execSync('git pull origin').toString()
            e.channel.send("```" + evaled + "```")
            if (evaled.indexOf("Already up-to-date.") > -1) {
                e.channel.send("There was nothing to update!");
                return;
            } else {
                e.channel.send("New code successfully pulled!\nRestarting...")
                process.exit(0)
            }
        })
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 6
};

exports.help = {
    name: 'update',
    usage: 'update',
    description: 'Pulls new changes from Github and restarts.'
};
