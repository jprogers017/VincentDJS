const Discord = require('discord.js');

module.exports = async (client, message) => {
    const mess = message.content.toLowerCase();
    const args = message.content.trim().split(/ +/g);
    const config = client.config;
    const disabledUsers = config.disabledUsers;
    const serverID = config.ids.server;
    const logsID = config.ids.logs;
    const dmsID = config.ids.dmLogs;
    const logs = client.guilds.get(serverID).channels.get(logsID);
    const dms = client.guilds.get(serverID).channels.get(dmsID);

    let dm = new Discord.RichEmbed()
        .setAuthor(`I recieved a message from ${message.author.tag}!`, client.user.avatarURL)
        .setColor(config.colors.main)
        .setDescription(`<@${message.author.id}>\n*${message.content}*`)
        .setTimestamp();

    if (message.author.bot) {
        return;
    } else if (message.channel.type === "dm") {
        dms.send(dm);
    } else if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
        return;
    }

    //joke swear filter
    for (let i = 0; i < config.jokeSwears.length; i++) {
        if (config.jokeSwears[i].test(mess)) {
            return message.channel.send('How dare you use that kind of language here?');
        }
    }

    //auto reply reaction memes :)
    if (mess.includes('guess ill die') || mess.includes("guess i'll die")) {
        return message.channel.send({
            files: ["./images/reactions/guessIllDie.jpg"]
        });
    } else if (mess.includes('yeehaw') || mess.includes('yee haw')) {
        message.channel.send({
            files: ["./images/reactions/howyee.png"]
        });
    }
    //dad jokes
    else if (((args[0].toLowerCase() == "i'm" || args[0].toLowerCase() == 'im'))) {
        if (disabledUsers.includes(message.author.id)) {
            return;
        } else if (!args[1]) {
            return;
        } else {
            let dadMessage = message.cleanContent.trim().split(/ +/g).slice(1).join(' ');
            return message.channel.send(`Hello, ${dadMessage}, I'm Vincent!`);
        }
    } else if ((args[0].toLowerCase() == 'i' && args[1].toLowerCase() == 'am')) {
        if (disabledUsers.includes(message.author.id)) {
            return;
        } else if (!args[2]) {
            return;
        } else {
            let dadMessage = message.cleanContent.trim().split(/ +/g).slice(2).join(' ');
            return message.channel.send(`Hello, ${dadMessage}, I'm Vincent!`);
        }

    } else if (mess.includes('press f to pay respects')) {
        return message.react('🇫');
    } else if (mess.includes('woof')) {
        return message.react('🐶');
    } else if (mess.includes('meow')) {
        return message.react('🐱');
    } else if (mess.includes('chiken')) {
        return message.react('🐔');
    } else if (mess.includes('farm')) {
        message.react('🐑');
        message.react('🐐');
        message.react('🐴');
        message.react('🐔');
        message.react('🐮');
        message.react('🦃');
        message.react('🐱');
        message.react('🐶');
        return;
    }
    //return if message doesnt start with prefix, or is only prefix...you know, cause it's a winky face... and people use those on their own
    else if (!mess.startsWith(client.commandPrefix)) {
        return;
    } else if (mess === client.commandPrefix) {
        return;
    }
};