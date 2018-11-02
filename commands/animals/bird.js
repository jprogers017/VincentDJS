const Commando = require('discord.js-commando');
const Discord = require('discord.js');

class BirdCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'bird',
            aliases: ['birb', 'birds', 'birbs'],
            group: 'animal',
            memberName: 'bird',
            description: `Has Vincent send a random bird.`,
            guildOnly: true
        });
    }
    run(message) {
            let number = 40;
            let randomBird = Math.floor(Math.random() * (number - 1 + 1)) + 1;

        if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
            return message.author.send("I don't have permission to speak there!");
        } else {
            message.say({
                files: ["./images/birds/" + randomBird + ".jpg"]
            });
        }
    }
}

module.exports = BirdCommand;