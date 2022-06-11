const { WebhookClient, MessageEmbed, ClientApplication } = require('discord.js')

module.exports = {
    name : 'say',
    execute(client, message, args) {

        const clientIcon = client.user.displayAvatarURL();
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Non usare questo comando se non hai i permessi!')
    const wc = new WebhookClient('985122159703785555', '-tkDnQBgUAryZhswX1QTtyiqS-n2SxrY7RJY6rqRjZoI3FqvZOJZyA28cBll6KiHIKUl')
        const embed = new MessageEmbed()
        .setTitle('**ATTENZIONE**')
        .setColor('RANDOM')
        .setTimestamp()
        .setDescription(args.join(" "))
        .setFooter(`Moderatore: ${message.author.tag}`)
    wc.send({
        username : client.tag,
        avatarURL : clientIcon,
        embeds : [embed]
    })
}
}