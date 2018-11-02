const Commando = require('discord.js-commando');

class serversCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'guilds',
            aliases: ['servers'],
            group: 'admin',
            memberName: 'guilds',
            description: 'List of guilds Vincent is in.',
            guildOnly: true,
        });
    }
    run(message) {
        // const args = message.content.trim().split(/ +/g);

        // if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
        //     return message.author.send("I don't have permission to speak there!");
        // } else if (!message.member.hasPermission('ADMINISTRATOR')) {
        //     return message.say("You need to have administrator permissions to use this command.").then(msg => {
        //             msg.delete(5000)
        //         })
        //         .catch();
        // } else {
        //     for (let i = 0; i < s.length; i++) {

        //     }
        // }
        let underDevEmbed = new Discord.RichEmbed()
            .setColor('#71bcff')
            .setTitle('Command Under Development')
            .setDescription("I haven't started working on this command yet. Try again another time, sorry!")
            .setTimestamp();
        message.say(underDevEmbed);
    }
}

module.exports = serversCommand;