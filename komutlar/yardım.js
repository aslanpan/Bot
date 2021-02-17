const Discord = require("discord.js");

exports.run = async (client, message, params, args) => {
  const yardım = new Discord.RichEmbed()
    .setColor(0x36393e)
    .setAuthor(`Alone Tayfa`, client.user.avatarURL)
    .setDescription(
      "[Botu sunucuya ekle](https://discordapp.com/oauth2/authorize?client_id=592884164890460171&scope=bot&permissions=2146958847) | [Discord'uma Katılmayı Unuma](https://discord.gg/CHp4n28) | [Youtube](https://www.youtube.com/channel/UC5mxQbR-4er2giWDTq9SgQg?view_as=subscriber)\n\n**Ping**: " +
        client.ping +
        "ms!\n\n"
    )
    .setThumbnail(client.user.avatarURL)
    .addField(
      `Alone Tayfa - Yardım`,
      `:white_small_square: | **+eğlence**: Sunucunuz için Eğlence Komutlarını Gösterir.!\n:white_small_square: | **+botkomutları**: Sunucudaki Coğu Komutları Gösterir\n:white_small_square: | **+yetkili**: Yetkili Komutlarını Gösterir!\n:white_small_square: | **+müzikkomutları**: Müzik Komutlarını Gösterir\n:white_small_square: | **+invite**:Bu Komudu Kullanarak Sponsor Sunucuya Gidebilirsiniz\n:white_small_square: | **+ping**:Botumuzun Pingini Gösterir\n:white_small_square: | **+temizle**:Gerektiği Kadar Mesaj Siler.\n:white_small_square: | **+rolbilgi**:Etiketlediğiniz Rolün Bilgilerini Gösterir\n:white_small_square: | **+havadurumu**: Yazğdığınız Bölgenin Hava Durumunu Söyler\ `
    )
    .setFooter(
      `${message.author.username} tarafından istendi.`,
      message.author.avatarURL
    );
  return message.channel.sendEmbed(yardım);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [
    "komut",
    "komutlar",
    "command",
    "yardım",
    "help",
    "halp",
    "y",
    "h",
    "commands"
  ],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "yardım",
  usage: "yardım"
};
