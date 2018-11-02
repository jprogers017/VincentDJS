const Commando = require('discord.js-commando');

class KoalaCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'koala',
            aliases: ['koalas'],
            group: 'animal',
            memberName: 'koala',
            description: `Has Vincent send a random koala.`,
            guildOnly: true
        });
    }
    run(message) {
        let number = 40;
        let randomKoala = Math.floor(Math.random() * (number - 1 + 1)) + 1;

        if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
            return message.author.send("I don't have permission to speak there!");
        } else {
            message.say({
                files: ["./images/koalas/" + randomKoala + ".jpg"]
            });
        }
    }
}

module.exports = KoalaCommand;