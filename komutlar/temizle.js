const Discord = require("discord.js");

exports.run = function(client, message) {
  message.channel.bulkDelete(50);
  message.channel
    .send("Gerektiği Kadar Mesaj Sildim Hadi Eyvallah🤍")
    .then(msg => {
      msg.delete(5000);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "temizle",
  description: "Belirtilen miktarda mesaj siler",
  usage: "temizle <miktar>"
};
