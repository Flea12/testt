const http = require('http');
const express = require('express');
const app = express();
var server = require('http').createServer(app);
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
const listener = server.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
 
 
 
const Discord = require('discord.js');
const { Client, Attachment, Collection, RichEmbed } = require('discord.js');
const client = new Client({
    disableEveryone: true
})
const usedCommandRecently4 = new Set();
 
 
 
 
client.on("ready", () => {
    console.log(`Ready to serve on ${client.guilds.size} servers, for ${client.users.size} users.`);
     let activities = [ `${client.guilds.size} Server!`, `${client.channels.size} Channel!`, `${client.users.size} Member!`, `Dev Yourname!` ], i = 0;
    setInterval(() => client.user.setActivity(`$help | ${activities[i++ % activities.length]}`, { type: "WATCHING" }), 15000)
 
 
 
})
 
client.on("message", message => {
 if (!message.author.bot) {
  // If the message is "how to embed"
  if (message.content.toLowerCase() === "$help") {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
    const embed = new RichEmbed()
      // Set the title of the field
      .setTitle("Help")
      // Set the color of the embed
      .setColor("#cc92f7")
 
      // Set the main content of the embed
      .addField(`Generators`, '$example')
    .addField(`Prefix`, '$')
    .addField(`Bot Developer`, 'XCX#4775')
    message.channel.send(embed);
    message.react("👍");
  }
 }
});
 
 
client.on('message', message =>{
    if (!message.guild) return;
if (message.content === '$nitro'){
  if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('Sorry But You cant generate now you have left 2 minutes')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 200000) 
    var string = `https://discord.gift/Ts1UsF2gEkj
https://discord.gift/F3A1OoWidXh
https://discord.gift/hVAA8MHvO8n
https://discord.gift/oInCLyYeh8s
https://discord.gift/WD3J56vpWF3`
    var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
    message.author.send(`${random}`);
                   message.channel.send(`Sent you Nitro code`);
        message.channel.send(`Check DM 🥳💖`);
};
};
});
 
 
client.login('NzYwNTU4MjQyOTkyMjI2MzU1.X3NzDw.UAzpZzyPYdx2-vXehIJi-5ijflg');