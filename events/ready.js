module.exports = async bot => {
    await wait(1000);
    //bot.log("log", `Ready to love ${bot.users.size} users in ${bot.guilds.size} servers!`, "RDY");
    console.log("ready");
    bot.user.setGame("I Am GAY");
}