const Commando = require('discord.js-commando');
const oneLinerJoke = require('one-liner-joke');

class JokesCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'joke',
            aliases: [],
            group: 'jokes',
            memberName: 'joke',
            description: `Has Vincent send a random one-liner joke.`,
            guildOnly: true
        });
    }
    run(message) {
        let randomJoke = oneLinerJoke.getRandomJoke();
        let rand = randomJoke.body;

        if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
            return message.author.send("I don't have permission to speak there!");
        } else {
            message.say(rand);
        }
    }
}

module.exports = JokesCommand;