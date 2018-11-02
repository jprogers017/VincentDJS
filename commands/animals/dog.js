const Commando = require('discord.js-commando');

class DogCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'dog',
            aliases: ['puppy', 'puppies', 'dogs', 'doggos', 'doggo'],
            group: 'animal',
            memberName: 'dog',
            description: `Has Vincent send a random dog.`,
            guildOnly: true
        });
    }
    run(message) {
        let number = 40;
        let randomDog = Math.floor(Math.random() * (number - 1 + 1)) + 1;

        if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
            return message.author.send("I don't have permission to speak there!");
        } else {
            message.say({
                files: ["./images/dogs/" + randomDog + ".jpg"]
            });
        }
    }
}

module.exports = DogCommand;