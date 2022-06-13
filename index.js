const {Collection, Client, Discord, MessageEmbed} = require('discord.js')
const fs = require('fs')
const client = new Client({
    disableEveryone: true,
    partials : ["MESSAGE", "CHANNEL", "REACTION"]
})

//handler
const config = require('./config.json')
const prefix = config.prefix
const token = config.token

client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
}); 

client.once('ready', () => {
    console.log(`${client.user.username} ✅`);
})

const jointocreate = require("./jointocreate");
jointocreate(client);

const count = require('./commands/info/count');
count(client);

const verifica = require('./commands/info/verifica');
verifica(client);

const reactionrole = require('./commands/info/reactionrole');
reactionrole(client);





const status = [
    `| $help |`,
    `il server`,
];
    

    let index = 0;
    setInterval(() => {
        if(index === status.length) index = 0;
        const status2 = status[index];
        
        client.user.setActivity(status2, { type: "WATCHING" }).catch(console.error)
        index++;
    }, 7500)


    const welcome = require("./commands/info/welcome")

    welcome(client);

    const left = require("./commands/info/left");
const command = require('./handlers/command')
const { channel } = require('diagnostics_channel')

    left(client);

    //eseguzione comandi
    client.on('message', async message =>{
        if(message.author.bot) return;
        if(!message.content.startsWith(prefix)) return;
        if(!message.guild) return;
        if(!message.member) message.member = await message.guild.fetchMember(message);
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase();
        if(cmd.length == 0 ) return;
        let command = client.commands.get(cmd)
        if(!command) command = client.commands.get(client.aliases.get(cmd));
        if(command) command.execute(client, message, args, Discord) 
    
        const logembed = new MessageEmbed()
    .setColor("BLUE")
    .setTitle("__**LOG COMANDI**__")
    .setTimestamp()
    .addField(`**Utente:**`, `\`${message.author.tag}\``)
    .addField(`**Comando:**`, `\`${command.name}\``)
    .addField(`**Canale:**`, `\`${message.channel}\``)


    const channellog = client.channels.cache.get('985118275165884456');
    if(message.author.bot) return;
    channellog.send(logembed);
    })


    

    
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
});

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
                //ban
            
                client.on("guildBanAdd", function (member, user) {
                    const banEmbed = new MessageEmbed()
                    .setTitle("**__BAN LOG__**")
                    .setColor('RED')
                    .addField(`**Utente:**`, `\`${user}\``)
                    .addField(`**ID:**`, `\`${user.id}\``)
                    .addField(`**TAG:**`, `${user.tag}`)
                    .setTimestamp()
                    const channel1 = client.channels.cache.get('985109517404631081')
                    channel1.send(banEmbed)
                });
          
                client.on("guildBanRemove", function (guild, user) {
                    const banEmbed = new MessageEmbed()
                    .setTitle("**__BAN LOG__**")
                    .setColor('GREEN')
                    .addField(`**Utente:**`, `\`${user}\``)
                    .addField(`**ID:**`, `\`${user.id}\``)
                    .addField(`**TAG:**`, `${user.tag}`)
                    .setTimestamp()
                    const channel1 = client.channels.cache.get('985109517404631081')
                    channel1.send(banEmbed)
                });
    
                
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


client.login(token)