const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const moment = require('moment');

class ServerInfoCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'server',
            aliases: ['guild', 'guildinfo', 'serverinfo'],
            group: 'info',
            memberName: 'server',
            description: `Has Vincent send information about the server.`,
            guildOnly: true
        });
    }
    run(message) {
        let createDate = moment.utc(message.member.createdAt).format('dddd, MMMM Do YYYY, HH:mm');
        let serverEmbed = new Discord.RichEmbed()
            .setAuthor(message.guild.name)
            .setColor(this.client.config.colors.main)
            .setThumbnail(message.guild.iconURL)
            .addField("Owner", message.guild.owner)
            .addField("Total Members", message.guild.memberCount)
            .addField('Region', message.guild.region)
            .addField("Created On", createDate);

        if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
            return message.author.send("I don't have permission to speak there!");
        } else {
            message.say(serverEmbed);
        }
    }
}

module.exports = ServerInfoCommand;