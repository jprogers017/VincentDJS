const Commando = require('discord.js-commando');

class KnockCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'knockknock',
            aliases: [],
            group: 'jokes',
            memberName: 'knockknock',
            description: `Has Vincent send a random knock knock joke!`,
            guildOnly: true
        });
    }
    run(message) {
        let knockKnockJokes = [
            "knock knock\nwhos there?\nrobin\nrobin who?\nrobin u, now gimme uR FUCKIN MONEY\n*https://www.youtube.com/watch?v=4asxm6susvA*",
            "knock knock\nwhos there?\nrobin\nrobin who?\nrobin u, now gimme uR FUCKIN MONEY\n*https://www.youtube.com/watch?v=4asxm6susvA*",
            "knock knock\nwhos there?\nrobin\nrobin who?\nrobin u, now gimme uR FUCKIN MONEY\n*https://www.youtube.com/watch?v=4asxm6susvA*",
            "knock knock\nwhos there?\nrobin\nrobin who?\nrobin u, now gimme uR FUCKIN MONEY\n*https://www.youtube.com/watch?v=4asxm6susvA*",
            "knock knock\nwhos there?\nrobin\nrobin who?\nrobin u, now gimme uR FUCKIN MONEY\n*https://www.youtube.com/watch?v=4asxm6susvA*",
            "knock knock\nwhos there?\nrobin\nrobin who?\nrobin u, now gimme uR FUCKIN MONEY\n*https://www.youtube.com/watch?v=4asxm6susvA*",
            "knock knock\nwhos there?\nrobin\nrobin who?\nrobin u, now gimme uR FUCKIN MONEY\n*https://www.youtube.com/watch?v=4asxm6susvA*",
            "knock knock\nwhos there?\ncow says\ncow says who?\nno, a cow says *mooooooo*",
            "knock knock\nwhos there?\ncow says\ncow says who?\nno, a cow says *mooooooo*",
            "knock knock\nwhos there?\ncow says\ncow says who?\nno, a cow says *mooooooo*",
            "knock knock\nwhos there?\ncow says\ncow says who?\nno, a cow says *mooooooo*",
            "knock knock\nwhos there?\ncow says\ncow says who?\nno, a cow says *mooooooo*",
            "knock knock\nwhos there?\ncow says\ncow says who?\nno, a cow says *mooooooo*",
            "knock knock\nwhos there?\ncow says\ncow says who?\nno, a cow says *mooooooo*",
            "knock knock\nwhos there?\nmustache\nmustache who?\ni mustache u a question, but ill shave it for later",
            "knock knock\nwhos there?\netch\netch who?\nbless u",
            "knock knock\nwhos there?\ntank\ntank who?\nur welcome",
            "knock knock\nwhos there?\ni smell mop\ni smell mop who?\ny would u smell ur poo",
            "knock knock\nwhos there?\ni eat mop\ni eat mop who\nu eat ur poo??? wtf",
            "knock knock\nwhos there?\nspell\nspell who?\nok, W. H. O. can u not spell who or somethin? dumbass",
            "knock knock\nwhos there?\ncandice\ncandice who? candice door fuckin open or what",
            "knock knock\nwhos there?\nboo\nboo who?\nlmfao pussy bitch, did u get scared of a joke?",
            "knock knock\nwhos there?\nstopwatch\nstopwatch who?\nstopwatch ur doin and PAY ATTENTION",
            "knock knock\nwhos there?\nto\nto who?\nnah bitch its to *WHOM* learn ur grammar",
            "knock knock\nwhos there?\nalec\nalec who?\nalec-tricity. aint that a shocker",
            "knock knock\nwhos there?\nsays\nsays who?\nsays me, thats who",
            "knock knock\nwhos there?\nstupid\nstupid who?\nstupid u, thats who"
        ];
        let rand = knockKnockJokes[Math.floor(Math.random() * knockKnockJokes.length)];

        if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
            return message.author.send("I don't have permission to speak there!");
        } else {
            message.say(rand);
        }
    }
}

module.exports = KnockCommand;