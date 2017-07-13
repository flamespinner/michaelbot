if(msg.author.id != require('../config.json').owner) return msg.reply("you are not allowed to do this!")
const child_process = require('child_process');
module.exports = {
    name: 'update',
    type: 'owner'
    usage: 'update',
    permission: 6,
    help: 'Pulls new changes from Github and restarts.',
    main: function (bot, msg) {
        msg.channel.send("Updating...").then(function (e) {
            var evaled = eval("child_process.execSync('git pull origin').toString()");
            e.delete();
            msg.channel.send("\`\`\`" + evaled + "\`\`\`").then(function (message) {
                if (evaled.indexOf("Already up-to-date.") > -1) {
                    message.channel.send("There was nothing to update!");
                    return;
                } else {
                    message.channel.send("New code successfully pulled!\nRestarting...").then(function (t) {
                        process.exit(0)
                    })
                }
            })
        })
    }
}