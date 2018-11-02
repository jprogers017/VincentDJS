const Commando = require('discord.js-commando');
const Discord = require('discord.js');

class CowCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'cow',
            aliases: ['cows'],
            group: 'animal',
            memberName: 'cow',
            description: `Has Vincent send a random cow.`,
            guildOnly: true
        });
    }
    run(message) {
        let number = 40;
        let randomCow = Math.floor(Math.random() * (number - 1 + 1)) + 1;

        if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
            return message.author.send("I don't have permission to speak there!");
        } else {
            message.say({
                files: ["./images/cows/" + randomCow + ".jpg"]
            });
        }
    }
}

module.exports = CowCommand;