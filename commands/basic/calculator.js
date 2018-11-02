const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const math = require('mathjs');

class CalculatorCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'calculator',
            aliases: ['calc', 'math'],
            group: 'basic',
            memberName: 'calculator',
            description: `Vincent does MATH!`,
            guildOnly: true
        });
    }
    run(message) {
        const args = message.content.trim().split(/ +/g).slice(1);
        let result;

        if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
            return message.author.send("I don't have permission to speak there!");
        } else if (!args[0]) return message.say('Please input what you would like me to calculate for you.');
        else {
            try {
                result = math.eval(args.join(' '));
            } catch (e) {
                return message.say('Sorry, please input a valid calculator.')
            }
        }

        let mathEmbed = new Discord.RichEmbed()
            .setColor(this.client.config.colors.main)
            .addField('Input', `\`\`\`js\n${args.join('')}\`\`\``)
            .addField('Output', `\`\`\`js\n${result}\`\`\``);

        message.say(mathEmbed);
    }
}

module.exports = CalculatorCommand;