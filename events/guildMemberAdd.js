module.exports = async (client, member) => {
    const ids = client.config.ids;
    const joinEmbed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.displayAvatarURL)
        .setTitle(`welcome, ${member.user.username}!`)
        .setDescription(`hello, <@${member.user.id}>, please go to <#${ids.getUrRoles}> and get ur <@&${ids.memberRole}> role so u can see the rest on the server :weary:`)
        .setColor('#73bcff')
        .setTimestamp();
        
    if (member.guild.id === ids.server) {
        member.guild.channels.get(ids.joinLeaveLogs).embed(joinEmbed);
    } else {
        return;
    }
};