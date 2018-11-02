const Commando = require('discord.js-commando');
const Discord = require('discord.js');

class TurtleCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'octopus',
            aliases: ['octopi'],
            group: 'animal',
            memberName: 'octopus',
            description: `Has Vincent send a random octopus!!!`,
            guildOnly: true
        });
    }
    run(message) {
        let number = 40;
        let randomOctopus = Math.floor(Math.random() * (number - 1 + 1)) + 1;

        if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
            return message.author.send("I don't have permission to speak there!");
        } else {
            message.say({
                files: ["./images/octopi/" + randomOctopus + ".jpg"]
            });
        }
    }
}

module.exports = TurtleCommand;