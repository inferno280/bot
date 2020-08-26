const Discord = require('discord.js');
const {Client , MessageEmbed} =  require('discord.js');
const oof = new Client ();
const bot = new Discord.Client();
const ms = require('ms');
const fs = require('fs');
const moongose = require('mongoose')
const ping = require('minecraft-server-util');
const { error } = require('console');
const { waitForDebugger } = require('inspector');
const { connect } = require('http2');
var usertickets = new Map();

moongose.connect("mongodb+srv://cutcopy:resone@cluster0-ycwow.mongodb.net/cutcopy?retryWrites=true&w=majority",{
    useUnifiedTopology: true,
    useNewUrlParser: true,

});






const  PREFIX  = '-';

oof.on('ready',() =>{
    console.log('bot is ready and online!')
})
bot.on('ready',() =>{
    console.log('oof is ready and online!')
})



bot.on('messagereactionroleadd',(messageReaction,user) => {
    console.log(user.username + 'reacted');

})


bot.on('guildMemberAdd',function(member){
    member.send('Welcome to the server!')
    let memberrole = member.guild.roles.cache.find(role => role.name === 'Member');
    member.roles.add(memberrole);
});
bot.on('message',message=>{
   
    
   
    

    

    switch (args[0]){
       
        case '!ping':
            var ping = Date.now() - message.createdTimestamp + " ms";
            const emb = new Discord.MessageEmbed()
            .addField("Ping/Latency",ping)
            .setColor(0xF1C40F)
            message.channel.send(emb);
            break;
           

oof.on('message',message=>{



    switch(args[0]){
       
        case '!say' :
            if((message.author.id == 688237610636017714) || (message.author.id == 420616930819309589)){
                message.delete()
                let hmm = '**'+ args.slice(1).join(" ")+'**';
                const gi = new MessageEmbed()
                .setDescription(hmm)
                
                .setColor(0xFF0000)

                return message.channel.send(gi);
            }
            break;
        
        case '!status':
            
            ping('play.skullnetwork.net',25565 ,(error,response) => {
                if(error) throw error
                if(!args[1]){
                const ip = 'play.skullnetwork.net'
                const nab = new MessageEmbed()
            .setTitle('Server Status')
            .setColor(0xF1C40F)
            .addField('Server IP ',ip,true)
            .addField('version',response.version,true)
            .addField('online players',response.onlinePlayers,true)
            .addField('Max players',response.maxPlayers,true)
            .setThumbnail('https://i.ibb.co/cC4HN4P/server-icon.png')

            message.channel.send(nab)
                }
                else if(  args[1]){
                    message.channel.send('please type only !status');
                }
                else if(  args[2]){
                    message.channel.send('please type only !status');
                }
                else if(  args[3]){
                    message.channel.send('please type only !status');
                }
                else{
                    const offline ='offline'
                    const ip = 'play.skullnetwork.net'
                    const hmm = new MessageEmbed()
                    .setTitle('Server Status')
                    .addField('Server IP ',ip,true)
                    .addField('server is',offline,true)
                    message.channel.send(hmm)
                    message.member.send('Dont worry, Server will be online soon')

                }

                
            })
            break;
        

            

    }

})

bot.login(process.env.token);
oof.login(process.env.token);
