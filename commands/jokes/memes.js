const Commando = require('discord.js-commando');

class MemeCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'meme',
            aliases: [],
            group: 'jokes',
            memberName: 'meme',
            description: `Has Vincent send a random meme that mik sent me...bless his soul.`,
            guildOnly: true
        });
    }
    run(message) {
        let number = 331;
        let randomMeme = Math.floor(Math.random() * (number - 1 + 1)) + 1;

        if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
            return message.author.send("I don't have permission to speak there!");
        } else {
            message.say({
                files: ["./images/memes/" + randomMeme + ".mp4"]
            });
        }
    }
}

module.exports = MemeCommand;