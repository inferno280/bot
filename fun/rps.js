const { MessageEmbed } = require('discord.js');


const huh = []
module.exports = {
    name: 'rps',
    category: 'fun',
    description: 'to play rock paper scissros',
    usage: 'rps',
    run: async(bot,message,args) => {
        const emg = new MessageEmbed()
        .setFooter('Please choose a option from the emoji below')
        .setDescription("Add a reaction to one of these emojis to play the game ")
        .setTimestamp()

        await message.channel.send(emg);

        const reacted = await 
    }
}