const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("523048543133630465")
setInterval(function() {
channel.send(`Mortazaa مش نصاب`);
}, 30)
})

client.login("NTMwNzY5NjUwODc1NjI5NTc4.DxENeQ.5Ut84GZH1NW4EhFAzzbBUp_1pZA");
