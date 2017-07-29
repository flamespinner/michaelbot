module.exports = {
	name: 'fight',
    usage: '<p>fight <user>',
    permission: 1,
    help: 'Simulates a fight against another user.',
	main: function(bot, msg) {
		var responses = [
			" was hit on the head by ", 
			" was kicked by ", 
			" was slammed into a wall by ",
			" was dropkicked by ",
			" was DDoSed by ", 
			" was chokeslammed by ",
			" was run over with a robot by ",
			" had their IQ dropped 15 points by ",
			" had a heavy object dropped on them by ",
			" was beat up by "
		];
		var player1 = msg.author;
		var player2 = msg.mentions.users.array()[0];
		var hp1 = 1000;
		var hp2 = 1000;
		var damage = [100, 150, 200, 300, 50, 250];
		var turn1 = (Math.random() > 0.5);
		var times = 0;
		
		if (player2 != null) {
			while (hp1 > 0 && hp2 > 0) {
				times++;
				var i = Math.floor(Math.random() * responses.length);
				var x = Math.floor(Math.random() * damage.length);
				if (turn1 == true) {
					hp2 = hp2 - damage[x];
					if (hp2 < 0)
						hp2 = 0;
					sendMessage("**" + player2.username + "**" + responses[i] + "**" + player1.username + "**! *[-" + damage[x] + " hp] [" + hp2 + " HP remaining]*", times);
					turn1 = false;
				} else {
					hp1 = hp1 - damage[x];
					if (hp1 < 0)
						hp1 = 0;
					sendMessage("**" + player1.username + "**" + responses[i] + "**" + player2.username + "**! *[-" + damage[x] + " hp] [" + hp1 + " HP remaining]*", times);
					turn1 = true;
				}
			}
			
			if (hp1 == 0)
				sendMessage(player1 + " lost! GG " + player2 + "!", times);
			else if (hp2 == 0)
				sendMessage(player2 + " lost! GG " + player1 + "!", times);
			
			setTimeout(() => {
				msg.channel.fetchMessages({limit: 100})
				.then(messages => {
					msgar = messages.array();
					msgar = msgar.filter(msg => msg.author.id === bot.user.id && msg.content.includes("HP remaining"));
					msgar.length = 20;
					msgar.map(msg => msg.delete().catch(console.error));
				});
			}, (times * 1500) + 2000);
			
			function sendMessage(content, times) {
				setTimeout(() => {
					msg.channel.sendMessage(content);
				}, 1500 * times);
			}
		} else {
			msg.reply("please mention someone!");
		}
	}
};