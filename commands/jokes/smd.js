const Commando = require('discord.js-commando');

class SuckMyDickCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'smd',
            aliases: ['suckit'],
            group: 'jokes',
            memberName: 'smd',
            description: `Has Vincent tell NinJackie to suck it.`,
            guildOnly: true
        });
    }
    run(message) {
        if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
            return message.author.send("I don't have permission to speak there!");
        } else {
            message.say(`<@!200837857214988298>, suck my dick.`);
        }
    }
}

module.exports = SuckMyDickCommand;