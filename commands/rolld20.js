const commando = require('discord.js-commando');

//var side = userinputhere

class DiceRollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'rolld20',
            group: 'dice',
            memberName: 'rolld20',
            description: 'Rolls a 20 sided die'
        });
    }

    async run(message, args) {
        var roll = Math.floor(Math.random() * 20) +1;
        //var roll = Math.floor(Math.random() * side) +1;
        message.reply("You rolled a " + roll);
        console.log("D 20 Rolled");
    }
}

module.exports = DiceRollCommand;