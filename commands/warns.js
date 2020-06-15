const warns = require('../../models/warns')
const { MessageEmbed } = require('discord.js')
module.exports={
    name: "warns",
    description: "get a user's warns in the guild",
    category: "moderation",
    usage: "<user mention>",
    run: async(bot,message,args) => {
        let user = message.mentions.users.members.first();
        if(!user) return message.reply('please enter a valid user');
        warns.find({Guild: message.guild.id, User: user.id} ,async(err,data) =>{
        if(err) console.log(err);
        if(!data.length) return message.reply(`${user,user.tag} has not got any warning` );
        message.channel.send(`${user,user.tag} has ${data.length} warns`);
        })
    }
}