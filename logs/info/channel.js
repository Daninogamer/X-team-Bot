const { MessageEmbed } = require('discord.js');
module.exports = (client) => {

    //channel log
client.on("channelCreate", function(channel) {
    const embed = new MessageEmbed()
    .setTitle("**__CHANNEL LOG CREATE__**")
    .setTimestamp()
    .setColor("GREEN")
    .addField("Nome:", `\`${channel.name}\``)
    .addField("ID:", `\`${channel.id}\``)
    .addField("Tipo:", `\`${channel.type}\``);

    const channel1 = client.channels.cache.get('985109298063478794')
    channel1.send(embed)
    });

    client.on("channelDelete", function(channel) {
        const embed = new MessageEmbed()
        .setTitle("**__CHANNEL LOG DELETE__**")
        .setTimestamp()
        .setColor("RED")
        .addField("Nome:", `\`${channel.name}\``)
        .addField("Tipo:", `\`${channel.type}\``);
        
    
        const channel1 = client.channels.cache.get('985109298063478794')
        channel1.send(embed)
        });
}