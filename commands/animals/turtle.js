const Commando = require('discord.js-commando');
const Discord = require('discord.js');

class TurtleCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'turtle',
            aliases: ['turtles'],
            group: 'animal',
            memberName: 'turtle',
            description: `Has Vincent send a random turtle.`,
            guildOnly: true
        });
    }
    run(message) {
        let number = 40;
        let randomTurtle = Math.floor(Math.random() * (number - 1 + 1)) + 1;

        if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
            return message.author.send("I don't have permission to speak there!");
        } else {
            message.say({
                files: ["./images/turtles/" + randomTurtle + ".jpg"]
            });
        }
    }
}

module.exports = TurtleCommand;