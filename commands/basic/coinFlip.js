const Commando = require('discord.js-commando');

class CoinFlipCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'coinflip',
            aliases: [],
            group: 'basic',
            memberName: 'coinflip',
            description: `Has Vincent flip a coin for you.`,
            guildOnly: true
        });
    }
    run(message) {
        let chance = Math.floor(Math.random() * 2);

        if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
            return message.author.send("I don't have permission to speak there!");
        } else if (chance == 0) {
            message.say('The coin landed on heads!');
        } else {
            message.say('The coin landed on tails!');
        }
    }
}

module.exports = CoinFlipCommand;