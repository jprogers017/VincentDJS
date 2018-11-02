const Commando = require('discord.js-commando');

class EightBallCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: '8ball',
            aliases: [],
            group: 'basic',
            memberName: '8ball',
            description: `Has Vincent act as a Magic 8 Ball.`,
            guildOnly: true
        });
    }
    run(message) {
        const args = message.content.trim().split(/ +/g);
        
        let eightBallReplies = [
            "It is certain",
            "It is decidely so",
            "Without a doubt",
            "Yes, definitely",
            "You may rely on it",
            "As I see it, yes",
            "Most likely",
            "Outlook good",
            "Signs point to yes",
            "Yes",
            "Reply hazy, try again",
            "Ask again later",
            "Better not tell you now",
            "Cannot predict now",
            "Concentrate and ask again",
            "Maybe",
            "Don't count on it",
            "My reply is no",
            "My sources say no",
            "Outlook not so good",
            "Very doubtful",
            "No"
        ];
        let eightBallResults = Math.floor((Math.random() * eightBallReplies.length));
        let eightBallAnswer = eightBallReplies[eightBallResults];

        if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
            return message.author.send("I don't have permission to speak there!");
        } else if (!args[0]) {
            message.channel.send("Did you have a question?");
        } else if (!args[1]) {
            message.channel.send("More than a one worded question, please!");
        } else {
            message.channel.send(eightBallAnswer);
        }
    }
}

module.exports = EightBallCommand;