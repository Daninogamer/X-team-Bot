const { MessageFlags, MessageEmbed } = require("discord.js");

module.exports = (client) => {
    const channelid = "985106105191501884";
    client.on("guildMemberRemove", (member) => {

        const message = new MessageEmbed()
        .setTitle('LEFT')
        .setColor('RED')
        .setDescription(`L'utente <@${member.id}> è uscito dal server!`)
        
        const channel = member.guild.channels.cache.get(channelid);
        channel.send(message);
    });
};