const child_process = require('child_process');
exports.run = (bot, msg, args) => {
    if(msg.author.id != require('../config.json').ownerID) return msg.reply("you are not allowed to do this!") 
        msg.channel.send("According to all known laws of aviation...");
        msg.channel.send("there is no way a bee should be able to fly.");
        msg.channel.send("Its wings are too small to get its fat little body off the ground.");
        msg.channel.send("The bee, of course, flies anyway");
        msg.channel.send("because bees don't care what humans think is impossible.");
        msg.channel.send("Yellow, black. Yellow, black.");
        msg.channel.send("Yellow, black. Yellow, black.");
        msg.channel.send("Ooh, black and yellow! Ooh, black and yellow!");
        msg.channel.send("Barry! Breakfast is ready!");
        msg.channel.send("Ooming!");
        msg.channel.send("Hang on a second.");
        msg.channel.send("Hello?");

        msg.channel.send("- Barry?");
        msg.channel.send("- Adam?");
        msg.channel.send("- Oan you believe this is happening?");
        msg.channel.send("- I can't. I'll pick you up.");
        msg.channel.send("Looking sharp.");
        msg.channel.send("Use the stairs. Your father paid good money for those.");
        msg.channel.send("Sorry. I'm excited.");
        msg.channel.send("Here's the graduate. We're very proud of you, son.");
        msg.channel.send("A perfect report card, all B's.");
        msg.channel.send("Very proud.");
        msg.channel.send("Ma! I got a thing going here.");
        msg.channel.send("- You got lint on your fuzz.");
        msg.channel.send("- Ow! That's me!");
        msg.channel.send("- Wave to us! We'll be in row 118,000.");
        msg.channel.send("- Bye!");
        msg.channel.send("Barry, I told you, stop flying in the house!");

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
    description: 'just... no'
};
