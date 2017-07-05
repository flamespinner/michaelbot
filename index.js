const commando = require('discord.js-commando');

const token = 'TOKENHERE';

const bot = new commando.Client({
    owner: '243174457336791041'
});

/*bot.registry.registerGroup
    ('dice', 'Dice Rolling'),*/


client.registry
    // Registers your custom command groups
    .registerGroups([
        ['dice, 'Dice Rolling'],
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
