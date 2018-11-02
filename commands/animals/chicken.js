const Commando = require('discord.js-commando');

class ChickenCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'chiken',
            aliases: ['chicken', 'chickens', 'chikens'],
            group: 'animal',
            memberName: 'chiken',
            description: `Has Vincent send a random chicken.`,
            guildOnly: true
        });
    }
    run(message) {
        let number = 40;
        let randomChicken = Math.floor(Math.random() * (number - 1 + 1)) + 1;

        if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
            return message.author.send("I don't have permission to speak there!");
        } else {
            message.say("DID SOMEONE SAY CHIKEN?");
            message.say({
                files: ["./images/chikens/" + randomChicken + ".jpeg"]
            });
        }
    }
}

module.exports = ChickenCommand;