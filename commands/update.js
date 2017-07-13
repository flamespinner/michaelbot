//if(msg.author.id != require('./config.json').ownerID) return msg.reply("you are not allowed to do this!")
exports.run = {
   const child_process = require('child_process');

    main: function (bot, msg) {
        msg.channel.send("Updating...").then(function (e) {
            var evaled = eval("child_process.execSync('git pull origin').toString()");
            e.delete();
            msg.channel.send("```" + evaled + "```").then(function (message) {
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

exports.conf = {
    enabled: true,
    guildONly: false,
    permLevel: 6
};

exports.help = {
    name: 'update',
    //type: 'owner'
    usage: 'update',
    description: 'Pulls new changes from Github and restarts.'
};