const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'sends all commands',
    execute(client, message, args, Discord) {
        const Embed = new MessageEmbed()
        .setTitle('Comandi:')
        .setColor('#0e8a76')
        .setDescription("Qui sono elencati i comandi per **X Team Bot**")
        .addFields(
            {name: '`**COMANDI UTENTE**`', value: '-----------------------'},
            {name: 'help', value: 'Manda questo elenco'},
            {name: 'classifica', value: 'Elenco in ordine cronologio degli utenti'},
            {name: 'ping', value: 'Pong'},
            {name: 'move', value: 'Sposta un utente in un canale vocale'},
            {name: '`**COMANDI STAFF**`', value: '-----------------------'},
            {name: 'say', value: 'Manda un messaggio in embed'},
            {name: 'warn', value: 'Warna un utente (Coming Soon)'},
            {name: 'clear', value: 'elimina un massimo di 99 messaggi'},
            {name: 'serverinfo', value: 'Visualizza le info del server'},
            {name: 'botinfo', value: 'Visualizza le info del bot'},
            {name: 'userinfo', value: 'Visualizza le info dell\'utente'},

             )
        .setImage('https://cdn.discordapp.com/attachments/984839675514601592/985106970484809799/120653702-lettera-x-simbolo-di-alfabeto-di-contorno-incandescente-colorato-su-sfondo-scuro-riflesso-lente-blu.jpg')
        .setTimestamp();

        message.channel.send(Embed);
    }
}