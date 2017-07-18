const child_process = require('child_process');
exports.run = (bot, msg, args) => {
   // if(msg.author.id != require('../config.json').ownerID) return msg.reply("you are not allowed to do this!")
    if(msg.author.id != require('../config.json').ownerID) return msg.repley("you are not allowed to do this!") 
        msg.channel.send("Updating...").then(e => {
            var update = child_process.execSync('git pull origin').toString()
            //msg.channel.send("```" + update + "```")
            console.log("hello");
            e.channel.send("```" + update + "```")
            if (evaled.indexOf("Already up-to-date.") > -1) {
                e.channel.send("There was nothing to update!");
                //msg.channel.send("There was nothing to update!")
                console.log("hello2");
            } else {
                //msg.channel.send("New code successfully pulled!")
                console.log("hello3");
                e.channel.send("New code successfully pulled!\nRestarting...")
                process.exit(0)
            }
        })
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 6
};

exports.help = {
    name: 'update',
    usage: 'update',
    description: 'Pulls new changes from Github and restarts.'
};
