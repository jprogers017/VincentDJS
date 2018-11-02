const Commando = require('discord.js-commando');

class PingCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'ping',
            aliases: [],
            group: 'info',
            memberName: 'ping',
            description: `Has Vincent send his ping.`,
            guildOnly: true
        });
    }
    run(message) {
        if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
            return message.author.send("I don't have permission to speak there!");
        } else {
            message.say(`My ping is ${this.client.ping}ms!`);
        }
    }
}

module.exports = PingCommand;