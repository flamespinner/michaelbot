const commando = require('discord.js-commando');

const token = 'MzMxNzg4NjA1NDg2MDA2Mjc0.DD07_w.iacOGTjc7OJqj9RBA8QX-Ylvn1E';

const bot = new commando.Client({
    owner: '243174457336791041'
});

/*bot.registry.registerGroup
    ('dice', 'Dice Rolling'),*/


client.registry
    // Registers your custom command groups
    .registerGroups([
        ['fun', 'Fun commands'],
        ['some', 'Some group'],
        ['other', 'Some other group']
    ])
    

bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on("ready", () => {
    bot.user.setGame("with Aryn 💑");
    console.log("I am Ready!");
});

bot.login(token);