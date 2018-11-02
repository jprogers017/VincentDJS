const Commando = require('discord.js-commando');
const Discord = require('discord.js');

class RolesCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'roles',
            aliases: [],
            group: 'info',
            memberName: 'roles',
            description: `Has Vincent send information about how roles work on the server.`,
            guildOnly: true
        });
    }
    run(message) {
        let member = message.guild.member(message.author);
        let roles = member.roles.map(roles => `   ${roles.name}`).slice(1).join('\n');
        let rolesEmbed = new Discord.RichEmbed()
            .setAuthor('Your current roles:')
            .setColor(this.client.config.colors.main)
            .setDescription(`${roles}\n\nAdd game specific roles in <#${this.client.config.myServer.getUrRoles}>.\nClick the reaction corresponding to which role you would like.`);
            
        if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
            return message.author.send("I don't have permission to speak there!");
        } else {
            message.say(rolesEmbed);
        }
    }
}

module.exports = RolesCommand;