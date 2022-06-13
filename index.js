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

const member = require('./logs/info/member');
member(client);

const banlog = require('./logs/info/banlog');
banlog(client);

const channel = require('./logs/info/channel');
channel(client);

const role = require('./logs/info/role');
role(client);

const message = require('./logs/info/message');
message(client);

const join = require('./logs/info/join');
join(client);



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


client.login(token)