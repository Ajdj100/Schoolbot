const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription("Learn all the things the bot can do!"),
    async execute(interaction) {
        await interaction.deferReply();
        console.log(`/help used by ${interaction.user.username} in ${interaction.channelId}`);
        

       interaction.editReply({ embeds: [helpEmbed]})
        
    },
};


//embed formatting
const helpEmbed = new MessageEmbed()
    .setTitle("The Mulkster")
    .setColor(0x1E73EF)
    .setDescription("Hello! Welcome to the Mulkster bot. This is the BCS Discord's open source bot with many functions to try and make life a little quicker and more fun for you. If you want to contribute to the bot, the github repo can be found here: https://github.com/Ajdj100/The-Mulkster")
    .addFields(
        { name: '\u200B', value: '\u200B' },
        { name: `Commands:`, value: `/help - well, you just used it. This is what it does!\n\n/ping - get the response time of the bot!\n\n/lab - tells you what lab you are in (this is mostly useless unless you are developing the bot)\n\n/schedule - shows the schedule for your block!\n\n/zoom - provides the zoom link for the class you specify. Enter a course code for the class you want in the 'class' field.` },
        { name: '\u200B', value: '\u200B' }
    )
    .setTimestamp()
    .setFooter({
        text: `Getting Mulked on the daily.`
    })