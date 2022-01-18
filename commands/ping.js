const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription("Gets some bot informaton."),
    async execute(interaction) {
        const sendTime = new Number(Date.now());
        console.log(`Ping requested at ${sendTime}`);
        pongEmbed.setDescription(`
        Response time: ${Date.now()-sendTime} ms
        Bot uptime:    ${getUptime()}
        `);

        console.log(`/ping used by ${interaction.user.username} in ${interaction.channelId}`);
        await interaction.reply({ embeds: [pongEmbed]});
        console.log(`Response sent in ${Date.now()-sendTime}`);
    },
};

//embed formatting
const attackLogEmbed = new MessageEmbed()
.setAuthor("Attack Detected")
  .setColor(0xF50A0A)
  .setURL("https://discord.js.org/#/docs/main/stable/class/MessageEmbed")
  .setTimestamp()

  const pongEmbed = new MessageEmbed()
  .setAuthor("Pong!")
  .setColor(0x1E73EF)


function getUptime(){
    seconds = new Number(process.uptime());

    function pad(s){
      return (s < 10 ? '0' : '') + s;
    }
    var hours = Math.floor(seconds / (60*60));
    var minutes = Math.floor(seconds % (60*60) / 60);
    var seconds = Math.floor(seconds % 60);
  
    return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
  }