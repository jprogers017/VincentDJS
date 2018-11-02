const Commando = require('discord.js-commando');
const Discord = require('discord.js');

class PollCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'vkick',
            aliases: ['voicekick', 'kickvoice', 'kickv'],
            group: 'admin',
            memberName: 'vkick',
            description: `Has Vincent kick a user from a voice channel.`,
            guildOnly: true,
            clientPermissions: ['MANAGE_MESSAGES']
        });
    }
    async run(message) {
        const kickChannel = await message.guild.createChannel('kickTemp', 'voice');
        const user = message.mentions.members.first();
        const channel = user.voiceChannel;

        if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
            return message.author.send("I don't have permission to speak there!");
        } else if (!message.guild.me.hasPermission(['MANAGE_CHANNELS', 'MOVE_MEMBERS'])) {
            return message.say('I need to have "manage channels" and "move members" permissions for you to use this command!').then(msg => {
                    msg.delete(5000)
                })
                .catch();
        } else if (!message.member.hasPermission('ADMINISTRATOR')) {
            return message.say("You need to have administrator permissions to use this command.").then(msg => {
                msg.delete(5000)
            }).catch();
        } else if (!user) {
            return message.say(`Who are you trying to kick from a voice channel?`);
        } else if (!channel) {
            return message.say(`${user} is not in a voice channel!`);
        } else {
            await user.setVoiceChannel(kickChannel);
            await kickChannel.delete();
            return message.say(`Kicked ${user} from the voice channel ${channel}!`);
        }
    }
}

module.exports = PollCommand;