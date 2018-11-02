const Commando = require('discord.js-commando');

class PurgeCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'purge',
            aliases: ['clear', 'delete'],
            group: 'admin',
            memberName: 'purge',
            description: `Has Vincent clear a given amount of messages.`,
            guildOnly: true,
            clientPermissions: ['MANAGE_MESSAGES']
        });
    }
    run(message) {
        const args = message.content.trim().split(/ +/g).slice(1);

        if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
            return message.author.send("I don't have permission to speak there!");
        } else if (!message.guild.me.hasPermission('MANAGE_MESSAGES')) {
            return message.say('I need to have "manage message" permissions to use this command.').then(msg => {
                    msg.delete(5000)
                })
                .catch();
        } else if (!message.member.hasPermission('ADMINISTRATOR')) {
            return message.say("You need to have administrator permissions to use this command.").then(msg => {
                    msg.delete(5000)
                })
                .catch();
        } else if (!args[0]) {
            message.say('You cannot clear 0 messages.');
        } else if (isNaN(args[0])) {
            message.say('A number, please.')
        } else if (args[0] >= 100) {
            message.say('A number less than 100, please!')
        } else {
            message.channel.bulkDelete(args[0])
            message.say(`Cleared ${args[0]} messages.`).then(msg => msg.delete(2000));
        }
    }
}

module.exports = PurgeCommand;