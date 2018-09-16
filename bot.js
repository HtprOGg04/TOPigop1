const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix

client.on('ready', () => {
  console.log(`[BOT] giriş yaptı ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === prefix + 'ping') {
    msg.channel.send(client.ping + 'ms');
  }
  
  if (msg.content === 'sa') {  
    msg.channel.send('Aleyküm Selam kardeşim Allah ın rahmeti ve bereketi üzerine olsun')
  }
  
  if (msg.content === 'selamun aleyküm') {  
    msg.channel.send('Aleyküm Selam kardeşim Allah ın rahmeti ve bereketi üzerine olsun');
  }
  
  if (msg.content === 'Selamun aleyküm') {  
    msg.channel.send('Aleyküm Selam kardeşim Allah ın rahmeti ve bereketi üzerine olsun');
  }
  
  if (msg.content === 'Selamun Aleyküm') {  
    msg.channel.send('Aleyküm Selam kardeşim Allah ın rahmeti ve bereketi üzerine olsun');
  }
  
  if (msg.content === 'SA') {  
    msg.channel.send('Aleyküm Selam kardeşim Allah ın rahmeti ve bereketi üzerine olsun');
  }
  
  if (msg.content === 'Sa') {  
    msg.channel.send('Aleyküm Selam kardeşim Allah ın rahmeti ve bereketi üzerine olsun');
  }
  
  if (msg.content === prefix + 'avatarım') {  
    msg.channel.send(msg.author.avatarURL);
  }
  
  
});

client.login(ayarlar.token);