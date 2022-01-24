const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('schedule')
        .setDescription("Shows you your schedule."),
    async execute(interaction) {
        console.log(`/schedule used by ${interaction.user.username} in ${interaction.channelId}`);

        //if the member has role ID of a block
        if(interaction.member.roles.cache.has('884797865258524712')) { //block 1
            console.log('displaying lab 1 schedule');
            interaction.reply({content: 'https://imgur.com/yW3zxiZ', ephemeral: true});
        } else if(interaction.member.roles.cache.has('884797917204975687')) { //block 2
            console.log('displaying lab 2 schedule');
            interaction.reply({content: 'https://imgur.com/YkeVvl9', ephemeral: true});
        } else if(interaction.member.roles.cache.has('884797948238647296')) { //block 3
            console.log('displaying lab 3 schedule');
            interaction.reply({content: 'https://imgur.com/f2xBKQh', ephemeral: true});
        } else {
            console.error("Couldnt get user's lab");
            interaction.reply({content: "I couldn't find your lab number. Make sure you have the correct role and contact @ajdj100 if the problem continues", ephemeral: true});
        }
    },
};