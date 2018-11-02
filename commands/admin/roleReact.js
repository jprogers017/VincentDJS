const Commando = require('discord.js-commando');
const Discord = require('discord.js');

class RoleReactions extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'rolereact',
            aliases: ['rrc'],
            group: 'admin',
            memberName: 'rolereact',
            description: `Creates a message to have members react to recieve roles.`,
            guildOnly: true,
            ownerOnly: true
        });
    }
    async run(message) {
        const server = message.guild.id;
        const mhamk = this.client.config.ids.server;
        const roles = this.client.roles;
        const reactions = this.client.reactions;

        let messageSent = this.client.messageSent;
        let rolesMap = this.client.rolesMap;
        let roleEmbed = new Discord.RichEmbed()
            .setColor(this.client.config.colors.main)
            .setTitle('Game Roles')
            .setDescription('React to each of the games that you play/own by clicking on the corresponding reactions below! *If more games are added in the future, you will need to re-react to the new message containing the new game roles.*');

        if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
            return message.author.send("I don't have permission to speak there!");
        } else if (!message.member.hasPermission('ADMINISTRATOR')) {
            return message.say("You need to have administrator permissions to use this command.").then(msg => {
                msg.delete(5000)
            }).catch();
        } else if (server !== mhamk) {
            return message.say(`This command is to only be used in <@${this.client.config.owner}>'s personal Discord server!`);
        } else {
            for (let i = 0; i < reactions.length; i++) rolesMap.set(reactions[i], roles[i]);

            message.say(roleEmbed).then(sent => {
                messageSent = sent;
                rolesMap.forEach((value, key, map) => {
                    var reactWith = key;
                    if (key.substring(0, 1) != "\\") reactWith = message.guild.emojis.find('name', key);
                    sent.react(reactWith);
                });
            });
        }
    }
}

module.exports = RoleReactions;