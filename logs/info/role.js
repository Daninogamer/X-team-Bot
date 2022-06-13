const { MessageEmbed } = require('discord.js');
module.exports = (client) => {


//role log
client.on("roleCreate", function(role) {
                
    const embed = new MessageEmbed()
    .setTitle("**__ROLE LOG CREATE__**")
    .setTimestamp()
    .setColor("GREEN")
    .addField("Nome:", `\`${role.name}\``)
    .addField("ID:", `\`${role.id}\``)
    .addField("Colore:", `\`${role.hexColor}\``)
    .addField("Posizione:", `\`${role.position}\``)
    .addField("Creato Alle:", `\`${role.createdAt}\``)
    .setTimestamp();
    const channel1 = client.channels.cache.get('985109604646154250')
    channel1.send(embed)
    });

    client.on("roleDelete", function(role) {

        const embed = new MessageEmbed()
        .setTitle("**__ROLE LOG DELETE__**")
        .setTimestamp()
        .setColor("RED")
        .addField("Nome:", `\`${role.name}\``)
        .addField("Colore:", `\`${role.hexColor}\``)
        .setTimestamp();
    const channel1 = client.channels.cache.get('985109604646154250')
        channel1.send(embed)
    });
}