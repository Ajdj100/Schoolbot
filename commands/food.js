const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('food')
        .setDescription("Takes a numeric input from the user and replies with the gif from hungry.soue.ca .")
        .addStringOption(message => message.setName('ID').setDescription('The numerical cod for the gif')),
    async execute(interaction) {
        console.log(`Command used by ${interaction.user.username} in ${interaction.channelId}`);

        await interaction.deferReply({ephemeral: true});

        const str = interaction.options.getString('class');	
	const num = parseInt(str);
	if(!num){
            console.error("User didn't enter a valid integer");
            interaction.editReply({content:"Please enter a valid integer"});
            return;
	}
	if(num < 1 || num > 335){
            console.error("User didn't enter a valid integer within range");
            interaction.editReply({content:"Please enter a number in range!"});
            return;
	}
	const ret = "https://hungry.soue.ca/"+str+".gif";
	await interaction.editReply({content:ret, ephemeral: true});
    },
};