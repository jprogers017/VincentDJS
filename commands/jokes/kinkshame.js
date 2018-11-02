const Commando = require('discord.js-commando');

class ShameCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'kinkshame',
            aliases: [],
            group: 'jokes',
            memberName: 'kinkshame',
            description: `Has Vincent kinkshame the tagged user.`,
            guildOnly: true
        });
    }
    run(message) {
        const args = message.content.trim().split(/ +/g);

        let user = message.mentions.members.first();
        let reason = args.slice(2).join(' ');
        let shameMsg = `${user}, should I be kinkshaming you for ${reason}?`;
        
        if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
            return message.author.send("I don't have permission to speak there!");
        } else if (!user) {
            message.say('Who am I kinkshaming?');
        } else if (!reason) {
            reason = 'this'
            message.say(shameMsg);
        } else {
            message.delete();
            message.say(shameMsg);
        }
    }
}

module.exports = ShameCommand;