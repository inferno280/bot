const warns = require('../../models/warns');
module.exports={
    name: 'warn',
    description: 'warn a user',
    category: 'moderation',
    usage: '<user mention> <reason>',
    run: async(bot,message,args) =>{
        let user = message.mentions.user.first()
        if(!user) return message.reply('please mention a user to warn')
        if(!args.slice(1).join(" ")) return message.reply('please specify a reason')
        warns.findOne({Guilf: message.guild.id,User: user.id},async(err,data,)=>{
            if(err) console.log(err)
            if(!data) {
                let newWarns = new warns({
                    User: user.id,
                    Guild: message.guild.id,
                    Warns:[
                        {
                            Moderator: message.author.id,
                            Reason: args.slice(1).join(" ")
                        }
                    ]
                    
                })
                newWarns.save()
                message.channel.send(`${user.tag} has been warned with the reason of ${args.slice(1).join(' ')}  by ${message.author.tag}. They now have one warn`)
            }
            else{
                data.Warns.umshift({
                    Moderator: message.author.id,
                    Reason: args.slice(1).join(" ")
                })
                data.save()
                message.channel.send(`${user.tag} has now been warned with the reason of ${args.slice(1).join(" ")} by ${message.author.tag}. They now have ${data.Warns.length} warns`)
            }
        })
    }
}