const Commando = require('discord.js-commando');

class RollCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'roll',
            aliases: [],
            group: 'basic', 
            memberName: 'roll',
            description: `Has Vincent roll a dice for you.`,
            guildOnly: true
        });
    }
    run(message) {
        let roll = Math.floor(Math.random() * 100) + 1;
        
        if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
            return message.author.send("I don't have permission to speak there!");
        } else if (roll <= 1) {
            message.say(`${roll}, ouch!`);
        } else if (roll >= 2 && roll <= 19) {
            message.say(`${roll}, better luck next time.`);
        } else if (roll >= 20 && roll <= 39) {
            message.say(`${roll}, could've been better...`);
        } else if (roll >= 40 && roll <= 59) {
            message.say(`${roll}, decent.`);
        } else if (roll >= 60 && roll <= 79) {
            message.say(`${roll}, now we're getting somewhere!`);
        } else if (roll >= 80 && roll <= 99) {
            message.say(`${roll}, woah. Look at you go!`);
        } else {
            message.say(`${roll} how'd you do that? Did you hack me?`);
        }
    }
}

module.exports = RollCommand;