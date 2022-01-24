const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('lab')
        .setDescription("Tells you what lab you are in."),
    async execute(interaction) {
        console.log(`/lab used by ${interaction.user.username} in ${interaction.channelId}`);
        
        //variable to hold users lab
        const lab = new String(""); 

        lab 
        if(interaction.member.roles.cache.has('933440451892092948')) {
            console.log('user is in block 3');
            await interaction.reply({content: 'You are in block 3.', ephemeral: true});
        }
        
        //await interaction.reply(`You are in ${lab}`);
    },
};