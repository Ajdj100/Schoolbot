const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('lab')
        .setDescription("Tells you what lab you are in."),
    async execute(interaction) {
        console.log(`/lab used by ${interaction.user.username} in ${interaction.channelId}`);
        
        //variable to hold users lab
        const lab = new String("");  //UNUSED, Saving for later rewrite

        //if the member has role ID of a block
        if(interaction.member.roles.cache.has('884797865258524712')) {
            console.log('user is in lab 1');
            await interaction.reply({content: 'You are in lab 3.', ephemeral: true});
        } else if(interaction.member.roles.cache.has('884797917204975687')) {
            console.log('user is in lab 2');
            await interaction.reply({content: 'You are in lab 3.', ephemeral: true});
        } else if(interaction.member.roles.cache.has('933440451892092948')) {
            console.log('user is in lab 3');
            await interaction.reply({content: 'You are in lab 3.', ephemeral: true});
        } else {
            console.log("Couldn't get user role");
            await interaction.reply({content: "Error getting lab, you either dont have the role or something went wrong", ephemeral: true});
        }
    },
};