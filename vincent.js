const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const path = require('path');
const fs = require('fs');

const config = require('./config/config.js');
const token = config.discordToken;

const client = new Commando.Client({
    commandPrefix: config.prefix,
    owner: ['221116684864454657', '419784267506384906'],
    disableEveryone: true,
    unknownCommandResponse: false
});

const roles = ['siege', 'minecraft', 'csgo', 'overwatch', 'pubg', 'blops 4', 'rocksmith'];
const reactions = ['siege', 'minecraft', 'csgo', 'overwatch', 'pubg', 'blops4', 'rocksmith'];
const emotes = {
    siege: {
        name: 'siege',
        role: 'siege',
        id: '483146133305294848'
    },
    minecraft: {
        name: 'minecraft',
        role: 'minecraft',
        id: '483146383906439168'
    },
    csgo: {
        name: 'csgo',
        role: 'csgo',
        id: '483146328843485205'
    },
    overwatch: {
        name: 'overwatch',
        role: 'overwatch',
        id: '483146167396335652'
    },
    pubg: {
        name: 'pubg',
        role: 'pubg',
        id: '483146201739296778'
    },
    blops4: {
        name: 'blops4',
        role: 'blops 4',
        id: '503638405712838686'
    },
    rocksmith: {
        name: 'rocksmith',
        role: 'rocksmith',
        id: '483146363048296478'
    },
};

var rolesMap = new Discord.Collection();
var messageSent;

client.config = config;
client.roles = roles;
client.reactions = reactions;
client.rolesMap = rolesMap;
client.messageSent = messageSent;

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['admin', 'Administrative Commands'],
        ['animal', 'Animal Commands'],
        ['basic', 'Basic Commands'],
        ['info', 'Informational Commands.'],
        ['jokes', 'Meme and Joke Commands']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands({
        help: true,
        prefix: false,
        ping: false,
        eval: true
    })
    .registerCommandsIn(path.join(__dirname, 'commands'));


// client.on('messageReactionAdd', (messageReaction, user) => handleReact(messageReaction, user));
// client.on('messageReactionRemove', (messageReaction, user) => handleReact(messageReaction, user, true));

// function handleReact(messageReaction, user, remove) {
//     let message = messageReaction.message;

//     if (message.id != messageSent.id || user.id == messageSent.id) return;

//     var roleName = rolesMap.get(messageReaction.emoji.name);
//     var role = message.guild.roles.find('name', roleName);
//     var member = message.members.get(user.id);
//     try {
//         if (remove) {
//             member.roles.remove(role);
//         } else {
//             member.roles.add(role);
//         }
//     } catch (err) {
//         console.log(err);
//     }
// }

function readEvents() {
    fs.readdir('./events/', (err, files) => {
        if (err) return console.error(err);
        let eventNumber = 0;
        console.log('\nEvents loading...');
        files.forEach(file => {
            try {
                const event = require(`./events/${file}`);
                let eventName = file.split(".")[0];
                ++eventNumber;
                client.on(eventName, event.bind(null, client));
                delete require.cache[require.resolve(`./events/${file}`)];
            } catch (err) {
                console.log(`Could not load event: ${file}\n   ${err}`);
            }
        });
        console.log(`${eventNumber} events loaded!`);
    });
}

readEvents();
client.login(token);