const { MessageEmbed } = require('discord.js');
const handler = require('../../handlers/command')
module.exports = (client) => {
//member log
client.on("guildMemberUpdate", (oldMember, newMember) => {
        
    if (oldMember.roles.cache.size > newMember.roles.cache.size) {
    
        const Embed = new MessageEmbed();
        Embed.setColor("RED");
        Embed.setAuthor(newMember.user.tag, newMember.user.avatarURL());
        
      
        oldMember.roles.cache.forEach(role => {
            if (!newMember.roles.cache.has(role.id)) {
                Embed.addField("Ruolo rimosso", role);
            }
        });

        client.channels.cache.get("985109229599850517").send(Embed);
    } else if (oldMember.roles.cache.size < newMember.roles.cache.size) {
        const Embed = new MessageEmbed();
        Embed.setColor("GREEN");
        Embed.setAuthor(newMember.user.tag, newMember.user.avatarURL());
        
       
        newMember.roles.cache.forEach(role => {
            if (!oldMember.roles.cache.has(role.id)) {
                Embed.addField("Ruolo aggiunto", role);
            }
        });
        client.channels.cache.get("985109229599850517").send(Embed);
    }
})};