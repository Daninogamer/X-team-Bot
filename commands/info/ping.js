const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')


module.exports = {
        name: 'ping',
        description: 'Shows bot latency',

    execute(client, message, args) {
        const embed = new MessageEmbed()
    .setTitle(`Pong!`)
      .setColor("RANDOM")
      .setTimestamp();
    message.channel.send(embed);

    }
}