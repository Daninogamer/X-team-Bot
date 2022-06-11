const { MessageEmbed } = require('discord.js')
module.exports = (client) => {
    const channelid = "984850523020755007";
    client.on("guildMemberAdd", (member) => {
    const ruolo = member.guild.roles.cache.find(r => r.name === '🚻Membri X');
    member.roles.add(ruolo);

        const message = new MessageEmbed()
        .setTitle('JOIN')
        .setColor('GREEN')
        .setDescription(`Ciao <@${member.id}>, benvenuto/a su **X Team** :smirk_cat: !\n Ti ricordiamo di **leggere il <#984853078912151563> e di prendere i <#985104619824902204> per sbloccare sezioni nascoste!** :partying_face:`)
        
        const channel = member.guild.channels.cache.get(channelid);
        channel.send(message);
    });
};