module.exports = async (client) => {
    let clientStatuses = [
        `with ${client.commandPrefix}help`,
        `with ${client.commandPrefix}help`,
        `on ${client.guilds.size} server(s)! || ${client.commandPrefix}help`,
        `with ${client.users.size} users! || ${client.commandPrefix}help`
    ];

    console.log(`\n${client.user.tag} is online in ${client.guilds.size} server(s)!\n`);
    setInterval(function () {
        let clientActivity = clientStatuses[Math.floor(Math.random() * clientStatuses.length)];
        client.user.setActivity(clientActivity);
    }, 10000)
};