const Commando = require('discord.js-commando');
const Discord = require('discord.js');

class PollCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'poll',
            aliases: [],
            group: 'admin',
            memberName: 'poll',
            description: `Has Vincent start a poll for you.`,
            guildOnly: true,
            clientPermissions: ['MANAGE_MESSAGES']
        });
    }
    async run(message) {
        const args = message.content.trim().split(/ +/g).slice(1);
        
        let pollEmbed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTitle('Yes or no?')
            .setColor(this.client.config.colors.main)
            .setDescription(args.join(' '))
            .setFooter(`Poll started by ${message.author.tag}`)
            .setTimestamp();

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
            return message.say(`"${this.client.commandPrefix}poll <question>" please!`);
        } else {
            let msg = await message.say(pollEmbed);
            await msg.react('✅');
            await msg.react('⛔');
            message.delete({
                timeout: 1000
            });
        }

    }
}

module.exports = PollCommand;