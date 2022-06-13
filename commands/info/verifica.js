const { MessageEmbed } = require('discord.js')
module.exports = (client) => {
  client.on("message", message => {
    if (message.content == ">>>>>>") {
        var embed = new MessageEmbed() //Crea il tuo embed o messaggio normale
            .setTitle("VERIFICA")
            .setDescription("Salve <@&985549568492056626>!\n **Per entrare a far parte del server premi la reazione ✅ che si trova qua sotto!**")

        message.channel.send(embed)
            .then(msg => {
                //Inserire tutte le reazioni che si vogliono
                msg.react("✅")
            })
    }
})
//Quando viene cliccata una reazione
client.on("messageReactionAdd", async function (messageReaction, user) {
    if (user.bot) return //Le reaction dei bot verranno escluse

    if (messageReaction.message.partial) await messageReaction.message.fetch();

    if (messageReaction.message.id == "985561084406685769") { //Settare id messaggio
        if (messageReaction._emoji.name == "✅") {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
            utente.roles.add("984868027361271828");
            utente.roles.add("985492890979561553");
            utente.roles.add("985492890774040606");
            utente.roles.add("985492536145608744"); //Settare ruolo
            utente.roles.remove("985549568492056626")
        }
    }
})}