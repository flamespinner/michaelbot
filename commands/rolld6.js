const commando = require('discord.js-commando');

//var side = userinputhere

class DiceRollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'rolld6',
            group: 'dice',
            memberName: 'rolld6',
            description: 'Rolls a 6 sided die'
        });
    }

    async run(message, args) {
        var roll = Math.floor(Math.random() * 6) +1;
        //var roll = Math.floor(Math.random() * side) +1;
        message.reply("You rolled a " + roll);
        console.log("Dice 6 Rolled");
    }
}

module.exports = DiceRollCommand;