const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('zoom')
        .setDescription("Provides a zoom link to the specified class.")
        .addStringOption(message => message.setName('class').setDescription('The code for the class')),
    async execute(interaction) {
        console.log(`Zoom Link used by ${interaction.user.username} in ${interaction.channelId}`);
        await interaction.deferReply();

        const str = interaction.options.getString('class');
        
        if(!str) {
            console.error("User didn't enter a course code");
            interaction.editReply({content:"Please enter a valid course ID"});
            return;
        }

        switch(str.toLowerCase()) {
            case 'cscn71030':
                await interaction.editReply({content:"https://conestogac.zoom.us/j/97692246472?pwd=QjVobzN5QWFuVXZIU3V1MGlBN2Vmdz09", ephemeral: true});
            break;
            case 'prog71020': 
                await interaction.editReply({content:"https://conestogac.zoom.us/j/97562867770?pwd=cHVnVll1QStCRXN3bmxONUZqN1ZZQT09", ephemeral: true});
            break;
            case 'prog71030':
                await interaction.editReply({content:"https://conestogac.zoom.us/j/98722533938?pwd=WUJQdVNtT3F5dUJYR2c4cEQvV21kUT09", ephemeral: true});
            break;
            case 'prog71040':
                await interaction.editReply({content:"https://conestogac.zoom.us/j/97858504158?pwd=K01nNWxGdWVjanJCSGpMd3NDT2FLdz09", ephemeral: true});
            break;
            case 'prog72365':
                await interaction.editReply({content:"https://conestogac.zoom.us/j/94265642057?pwd=REpiV2VRWVNZeUFTZkg5RnBabFRxdz09 ", ephemeral: true});
            break;
            case 'soc71500':
                await interaction.editReply({content:"https://conestogac.zoom.us/j/92876046146?pwd=dDZxalhUM2RhKzRXeEFVcG40cXBRQT09", ephemeral: true});
            break;
            default:
                await interaction.editReply({content:"Please enter a valid course ID", ephemeral: true});
            break;
        }
    },
};