const Commando = require('discord.js-commando');

class HelloCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'hello',
            aliases: ['hey', 'hi'],
            group: 'basic',
            memberName: 'hello',
            description: `Vincent says hello!`,
            guildOnly: true
        });
    }
    run(message) {
        if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
            return message.author.send("I don't have permission to speak there!");
        } else {
            message.say(`Hello!`);
        }
    }
}

module.exports = HelloCommand;