const { MessageEmbed } = require('discord.js');
module.exports = (client) => {

      //ban
            
      client.on("guildBanAdd", function (member, user) {
        const banEmbed = new MessageEmbed()
        .setTitle("**__BAN LOG__**")
        .setColor('RED')
        .addField(`**Utente:**`, `\`${user}\``)
        .addField(`**ID:**`, `\`${user.id}\``)
        .addField(`**TAG:**`, `${user.tag}`)
        .setTimestamp()
        const channel1 = client.channels.cache.get('985109517404631081')
        channel1.send(banEmbed)
    });

    client.on("guildBanRemove", function (guild, user) {
        const banEmbed = new MessageEmbed()
        .setTitle("**__BAN LOG__**")
        .setColor('GREEN')
        .addField(`**Utente:**`, `\`${user}\``)
        .addField(`**ID:**`, `\`${user.id}\``)
        .addField(`**TAG:**`, `${user.tag}`)
        .setTimestamp()
        const channel1 = client.channels.cache.get('985109517404631081')
        channel1.send(banEmbed)
    });

}