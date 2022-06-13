const { MessageEmbed } = require('discord.js');
module.exports = (client) => {

         //member
         client.on("guildMemberAdd", function (member, message) {
            const embed = new MessageEmbed()
            .setTitle("**USER JOINED**")
            .setTimestamp()
            .setColor("GREEN")
            .addField("Utente:", `\`${member.user}\``)
            .addField("ID:", `\`${member.user.id}\``)
            .addField("Tag:", `\`${member.user.tag}\``)
            .setTimestamp()
            .setImage(member.user.displayAvatarURL({dynamic: true}))
          

            const channel1 = client.channels.cache.get('985109229599850517')
            channel1.send(embed)
        });

            
            client.on("guildMemberRemove", (member) => {
                const channelid = "985109229599850517";
        
                const message = new MessageEmbed()
                .setTitle("**USER LEFT**")
                .setTimestamp()
                .setColor("RED")
                .addField("Utente:", `\`${member.user}\``)
                .addField("ID:", `\`${member.user.id}\``)
                .addField("Tag:", `\`${member.user.tag}\``)
                .setTimestamp()
                .setImage(member.user.displayAvatarURL({dynamic: true}))
                
                const channel = member.guild.channels.cache.get(channelid);
                channel.send(message);
            });
}