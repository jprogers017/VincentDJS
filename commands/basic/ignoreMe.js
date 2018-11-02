const Commando = require('discord.js-commando');
const fs = require('fs');
const mongoose = require('mongoose');

class IgnoreMeCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'ignoreme',
            aliases: [],
            group: 'basic',
            memberName: 'ignoreme',
            description: 'I GUESS Vincent can stop dad joking you.',
            guildOnly: true
        });
    }
    run(message) {
        const me = this.client.config.owner;

        if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
            return message.author.send("I don't have permission to speak there!");
        } else {
            let sendMe = this.client.fetchUser(me)
                .then(user => {
                    user.send(`<@${message.author.id}> would like to be ignored. '${message.author.id}',`);
                    message.say(`Your request to be ignored, regarding dad jokes, will be acknowledged shortly! <@${this.client.config.owner}> currently has to add them herself until she has time to have me automatically add you! I apologize for any inconveniences for the time being :(`);
                });
        }
    }
}

module.exports = IgnoreMeCommand;