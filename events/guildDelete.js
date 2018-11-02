module.exports = async (client, guild) => {
    const config = client.config;
    const token = config.discordToken;

    console.log(`Left a guild: ${guild.name} (${guild.owner})`);
    client.destroy();
    client.login(token);
};