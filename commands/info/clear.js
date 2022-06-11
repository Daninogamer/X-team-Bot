const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'clear',
    description: 'clear',
    execute(client, message, args, Discord) {

        const permessi = new MessageEmbed()
        .setTitle("CLEAR")
        .setColor("RANDOM")
        .setDescription("**Non hai il permesso neccessario per eseguire questo comando!**")

        const count1 = new MessageEmbed()
        .setTitle("CLEAR")
        .setColor("RANDOM")
        .setDescription("**Inserisci un numero di messaggi da eliminare!**")


if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(permessi);
    return;
}
if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(permessi);
    return;
}

var count = message.content.slice(7);
count = parseInt(count);

if (!count) {
    message.channel.send(count1)
    return
}

const done = new MessageEmbed()
.setTitle("CLEAR")
.setColor("RANDOM")
.setDescription(`**Ho eliminato ${count} messaggi!**`)

message.channel.bulkDelete(count +1, true)
message.channel.send(done).then(msg => {
    msg.delete({ timeout: 3000 })
})

}
}
