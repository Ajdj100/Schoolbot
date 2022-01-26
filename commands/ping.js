const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription("Gets some bot informaton."),
    async execute(interaction) {
        await interaction.deferReply();
        console.log(`/ping used by ${interaction.user.username} in ${interaction.channelId}`);
        

        console.log(`Response sent in ${Date.now()-interaction.createdTimestamp} ms`)
        
        pongEmbed.setDescription(`
        Response time: ${Date.now()-interaction.createdTimestamp} ms
        Bot uptime:    ${getUptime()}
        `);

        await interaction.editReply({ embeds: [pongEmbed]})

        pongEmbed.setDescription(`
        Response time: ${Date.now()-interaction.createdTimestamp} ms
        Bot uptime:    ${getUptime()}
        `);

        await interaction.editReply({ embeds: [pongEmbed] });
        
    },
};

//embed formatting
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