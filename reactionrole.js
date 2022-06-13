const { MessageEmbed } = require('discord.js')

module.exports = (client) => {

//reaction role
client.on("message", message => {
    if (message.content == ">>>>>") {
        var embed = new MessageEmbed() //Crea il tuo embed o messaggio normale
            .setTitle("Ruoli")
            .setDescription("Clicca sulle reazioni per ottenere i ruoli")
            .addField('Colori', '<@&985156710580777030>\n <@&985156857935065159>\n <@&985156919222222898>\n <@&985156983751593994>\n <@&985157035379261440>\n <@&985119618358210580>', true)
            .addField('Giochi', '<@&985171811161493565>\n <@&985171863225401356>\n <@&985171921832386610>\n <@&985171980007403601>\n <@&985172076837109871>\n <@&985172277375168542>\n ', true)
            .addField('For Fun', '<@&985180168207343636>\n <@&985180225598005288>\n', true)

        message.channel.send(embed)
            .then(msg => {
                //Inserire tutte le reazioni che si vogliono
                msg.react("🔴")
                msg.react("🟠")
                msg.react("🟡")
                msg.react("🟢")
                msg.react("🔵")
                msg.react("🟣")
                msg.react("🕹️")
                msg.react("🧱")
                msg.react("🎮")
                msg.react("🔫")
                msg.react("🔪")
                msg.react("☠️")
                msg.react("🤡")
                msg.react("🎵")
            })
    }
})
//Quando viene cliccata una reazione
client.on("messageReactionAdd", async function (messageReaction, user) {
    if (user.bot) return //Le reaction dei bot verranno escluse

    if (messageReaction.message.partial) await messageReaction.message.fetch();

    if (messageReaction.message.id == "985551868354781314") { //Settare id messaggio
        if (messageReaction._emoji.name == "🔴") {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
            utente.roles.add("985156710580777030"); //Settare ruolo
        }
        if (messageReaction._emoji.name == "🟠") {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
            utente.roles.add("985156857935065159");
        }
        if (messageReaction._emoji.name == "🟡") {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
            utente.roles.add("985156919222222898");
        }
        if (messageReaction._emoji.name == "🟢") {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
            utente.roles.add("985156983751593994"); //Settare ruolo
        }
        if (messageReaction._emoji.name == "🔵") {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
            utente.roles.add("985157035379261440");
        }
        if (messageReaction._emoji.name == "🟣") {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
            utente.roles.add("985119618358210580"); //Settare ruolo
        }
        if (messageReaction._emoji.name == "🕹️") {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
            utente.roles.add("985171811161493565");
        }
        if (messageReaction._emoji.name == "🧱") {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
            utente.roles.add("985171863225401356");
        }
        if (messageReaction._emoji.name == "🎮") {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
            utente.roles.add("985171921832386610"); //Settare ruolo
        }
        if (messageReaction._emoji.name == "🔫") {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
            utente.roles.add("985171980007403601"); //Settare ruolo
        }
        if (messageReaction._emoji.name == "🔪") {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
            utente.roles.add("985172076837109871");
        }
        if (messageReaction._emoji.name == "☠️") {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
            utente.roles.add("985172277375168542"); //Settare ruolo
        }
        if (messageReaction._emoji.name == "🤡") {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
            utente.roles.add("985180168207343636");
        }
        if (messageReaction._emoji.name == "🎵") {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
            utente.roles.add("985180225598005288");
        }
    }
})
//Quando viene rimossa una reazione
client.on("messageReactionRemove", async function (messageReaction, user) {
    if (user.bot) return

    if (messageReaction.message.partial) await messageReaction.message.fetch();

    if (messageReaction.message.id == "985551868354781314") {
        if (messageReaction._emoji.name == "🔴") {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
            utente.roles.remove("985156710580777030");
        }
        if (messageReaction._emoji.name == "🟠") {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
            utente.roles.remove("985156857935065159");
        }
        if (messageReaction._emoji.name == "🟡") {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
            utente.roles.remove("985156919222222898");
        }        if (messageReaction._emoji.name == "🟢") {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
            utente.roles.remove("985156983751593994");
        }
        if (messageReaction._emoji.name == "🔵") {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
            utente.roles.remove("985157035379261440");
        }
        if (messageReaction._emoji.name == "🟣") {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
            utente.roles.remove("985119618358210580");
        }
        if (messageReaction._emoji.name == "🕹️") {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
            utente.roles.remove("985171811161493565");
        }
        if (messageReaction._emoji.name == "🧱") {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
            utente.roles.remove("985171863225401356");
        }
        if (messageReaction._emoji.name == "🎮") {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
            utente.roles.remove("985171921832386610");
        }
        if (messageReaction._emoji.name == "🔫") {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
            utente.roles.remove("985171980007403601");
        }
        if (messageReaction._emoji.name == "🔪") {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
            utente.roles.remove("985172076837109871");
        }
        if (messageReaction._emoji.name == "☠️") {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
            utente.roles.remove("985172277375168542");
        }
        if (messageReaction._emoji.name == "🤡") {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
            utente.roles.remove("985180168207343636");
        }
        if (messageReaction._emoji.name == "🎵") {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
            utente.roles.remove("985180225598005288");
        }
        
    }
})

}