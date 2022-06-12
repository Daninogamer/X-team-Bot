const { Collection } = require('discord.js')

module.exports = (client) => {


const snipes = new Collection()
    
client.on("guildMemberAdd", member => {
    var canale = client.channels.cache.get("985466944444588063")
    canale.setName("👫| 𝗧𝗨𝗧𝗧𝗜 𝗜 𝗠𝗘𝗠𝗕𝗥𝗜: " + member.guild.memberCount) //Impostare il nome del canale
});
client.on("guildMemberAdd", message => {
    const membri = message.guild.members.cache;
    var canale = client.channels.cache.get("985468675438039102")
    canale.setName("👨| 𝗠𝗘𝗠𝗕𝗥𝗜: " + `${membri.filter(m => !m.user.bot).size}`) //Impostare il nome del canale

});

client.on("guildMemberAdd", message => {
    const membri = message.guild.members.cache;
    var canale = client.channels.cache.get("985470159231791104")
    canale.setName("🤖| 𝗕𝗢𝗧𝗦: " + `${membri.filter(m => m.user.bot).size}`, true) //Impostare il nome del canale

});

// member count remove
client.on("guildMemberRemove", message => {
    const membri = message.guild.members.cache;
    var canale = client.channels.cache.get("985468675438039102")
    canale.setName("👨| 𝗠𝗘𝗠𝗕𝗥𝗜: " + `${membri.filter(m => !m.user.bot).size}`) //Impostare il nome del canale

});

client.on("guildMemberRemove", message => {
    const membri = message.guild.members.cache;
    var canale = client.channels.cache.get("985470159231791104")
    canale.setName("🤖| 𝗕𝗢𝗧𝗦: " + `${membri.filter(m => m.user.bot).size}`, true) //Impostare il nome del canale

});

client.on("guildMemberRemove", member => {
    var canale = client.channels.cache.get("985466944444588063")
   canale.setName("👫| 𝗧𝗨𝗧𝗧𝗜 𝗜 𝗠𝗘𝗠𝗕𝗥𝗜: " + member.guild.memberCount) //Impostare il nome del canale
})};