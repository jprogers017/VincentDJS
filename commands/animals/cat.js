const Commando = require('discord.js-commando');

class CatCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'cat',
            aliases: ['kitty', 'kitties', 'cats'],
            group: 'animal',
            memberName: 'cat',
            description: `Has Vincent send a random cat.`,
            guildOnly: true
        });
    }
    run(message) {
        let number = 40;
        let randomCat = Math.floor(Math.random() * (number - 1 + 1)) + 1;

        if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
            return message.author.send("I don't have permission to speak there!");
        } else {
            message.say({
                files: ["./images/cats/" + randomCat + ".jpg"]
            });
        }
    }
}

module.exports = CatCommand;