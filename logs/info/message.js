const { MessageEmbed } = require('discord.js');
module.exports = (client) => {

    //message
    client.on("messageDelete", function(message, channel) {
        const embed = new MessageEmbed()
        .setTitle("**__MESSAGE LOG DELETE__**")
        .setTimestamp()
        .setColor("RED")
        .addField("Autore:", `\`${message.author}\``)
        .addField("Contenuto:", `\`${message.content}\``)
        .setTimestamp();

        const channel1 = client.channels.cache.get('985109382310277120')
        channel1.send(embed)
        });

        client.on("message", function(message, channel) {
            if(message.author.bot) return;
            const embed = new MessageEmbed()
            .setTitle("**__MESSAGE LOG SEND__**")
            .setTimestamp()
            .setColor("GREEN")
            .addField("Autore:", `\`${message.author.tag}\``)
            .addField("ID:", `\`${message.author}\``)
            .addField("Contenuto:", `\`${message.content}\``)
            .addField("Alle:", `\`${message.createdAt}\``)
            .setTimestamp();

            const channel1 = client.channels.cache.get('985109382310277120')
            channel1.send(embed)
            });
}