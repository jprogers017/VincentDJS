const Commando = require('discord.js-commando');
const Discord = require('discord.js');

class InviteCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'invite',
            aliases: [],
            group: 'info',
            memberName: 'invite',
            description: `Has Vincent send his server invite link.`,
            guildOnly: true
        });
    }
    run(message) {
        let inviteEmbed = new Discord.RichEmbed()
            .setAuthor(`Click here for Vincent's Invite link!`, this.client.user.avatarURL, 'https://discordapp.com/api/oauth2/authorize?client_id=483882945766096896&permissions=60480&scope=bot')
            .setColor('#71bcff');
            
        if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
            return message.author.send(`I don't have permission to speak there!\n${inviteEmbed}`);
        } else {
            message.say(inviteEmbed)
        }
    }
}

module.exports = InviteCommand;