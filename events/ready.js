module.exports = async bot => {
    await wait(1000);
    bot.log("log", `Ready to love ${bot.users.size} users in ${bot.guilds.size} servers!`, "RDY");
    bot.log("log", `I'm ready!`, "RDY");
    bot.user.setGame('laejfa;wefjawo;fj', 'http://twitch.tv/Agent_Flame', 1);
}