const Commando = require('discord.js-commando');
const Discord = require('discord.js');

class GithubCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'github',
            aliases: [],
            group: 'info',
            memberName: 'github',
            description: `Has Vincent send his Github link.`,
            guildOnly: true
        });
    }
    run(message) {
        let githubEmbed = new Discord.RichEmbed()
            .setAuthor(`Click here for Vincent's Github link!`, this.client.user.avatarURL, 'https://github.com/jprogers017/Vincent')
            .setColor('#71bcff');

        if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
            return message.author.send(`I don't have permission to speak there!\n${githubEmbed}`);
        } else {
            message.say(githubEmbed);
        }
    }
}

module.exports = GithubCommand;