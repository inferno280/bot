const Discord = require('discord.js');
const {Client , MessageEmbed} =  require('discord.js');
const oof = new Client ();
const bot = new Discord.Client();
const ms = require('ms');
const fs = require('fs');
const moongose = require('mongoose')
const ping = require('minecraft-server-util');
const { error } = require('console');

moongose.connect("mongodb+srv://cutcopy:resone@cluster0-ycwow.mongodb.net/cutcopy?retryWrites=true&w=majority",{
    useUnifiedTopology: true,
    useNewUrlParser: true,

});






var PREFIX  = '-';

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
    let memberrole = member.guild.roles.cache.find(role => role.name === 'member');
    member.roles.add(memberrole);
});
bot.on('message',message=>{
   
    if(message.content === 'hello'){
        message.reply('HELLO FRIEND!');
    } 

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]){
        case 'info':
            const embed = new Discord.MessageEmbed()
            .setTitle('user information')
            .addField('Player Name',message.author.username,true)
            .addField('owner',message.guild.owner,true)
            .addField('current server', message.guild.name,true)
            .setColor(0xF1C40F)
            .setThumbnail(message.author.avatarURL(true))
            message.channel.send(embed);
            break;
        case 'ping':
            const emb = new Discord.MessageEmbed()
            .addField('pong',message.author.tag)
            message.channel.send(emb);
            break;
            
        case 'clear':
            
            if(message.member.roles.cache.find(role => role.name ==='Admin') || message.member.roles.cache.find(role => role.name ==='Staff')|| message.member.roles.cache.find(role => role.name === 'Owner') ) {
              
                if(!args[1]){
                    const em = new Discord.MessageEmbed()
                    .setTitle('moderation')
                    .addField('please enter the number of messages to clear!',message.author.tag )
                    message.channel.send(em);
                }
                else{
                    if(args[1]<= 100){
                        message.channel.bulkDelete(args[1]);
                    }
                    else if(args[1]<=200){
                        message.channel.bulkDelete(100)
                        .then(message.channel.bulkDelete(args[1]-100))
                    }
                    else if(args[1]<=300){
                        message.channel.bulkDelete(100)
                        .then(message.channel.bulkDelete(100))
                        .then(message.channel.bulkDelete(args[1]-200))
                    }
                    else if(args[1]<=400){
                        message.channel.bulkDelete(100)
                        .then(message.channel.bulkDelete(100))
                        .then(message.channel.bulkDelete(100))
                        .then(message.channel.bulkDelete(args[1]-300))
                    }
                    else if(args[1]<=500){
                        message.channel.bulkDelete(100)
                        .then(message.channel.bulkDelete(100))
                        .then(message.channel.bulkDelete(100))
                        .then(message.channel.bulkDelete(100))
                        .then(message.channel.bulkDelete(args[1]-400))
                    }
                    else if(args[1]<=600){
                        message.channel.bulkDelete(100)
                        .then(message.channel.bulkDelete(100))
                        .then(message.channel.bulkDelete(100))
                        .then(message.channel.bulkDelete(100))
                        .then(message.channel.bulkDelete(100))
                        .then(message.channel.bulkDelete(args[1]-500))
                    }
                    else if(args[1]<=700){
                        message.channel.bulkDelete(100)
                        .then(message.channel.bulkDelete(100))
                        .then(message.channel.bulkDelete(100))
                        .then(message.channel.bulkDelete(100))
                        .then(message.channel.bulkDelete(100))
                        .then(message.channel.bulkDelete(100))
                        .then(message.channel.bulkDelete(args[1]-600))
                    }
                    else if(args[1]<=800){
                        message.channel.bulkDelete(100)
                        .then(message.channel.bulkDelete(100))
                        .then(message.channel.bulkDelete(100))
                        .then(message.channel.bulkDelete(100))
                        .then(message.channel.bulkDelete(100))
                        .then(message.channel.bulkDelete(100))
                        .then(message.channel.bulkDelete(100))
                        .then(message.channel.bulkDelete(args[1]-700))
                    }
                    else if(args[1]<=900){
                        message.channel.bulkDelete(100)
                        .then(message.channel.bulkDelete(100))
                        .then(message.channel.bulkDelete(100))
                        .then(message.channel.bulkDelete(100))
                        .then(message.channel.bulkDelete(100))
                        .then(message.channel.bulkDelete(100))
                        .then(message.channel.bulkDelete(100))
                        .then(message.channel.bulkDelete(100))
                        .then(message.channel.bulkDelete(args[1]-800))
                    }
                    else if(args[1]<=1000){
                        message.channel.bulkDelete(100)
                        .then(message.channel.bulkDelete(100))
                        .then(message.channel.bulkDelete(100))
                        .then(message.channel.bulkDelete(100))
                        .then(message.channel.bulkDelete(100))
                        .then(message.channel.bulkDelete(100))
                        .then(message.channel.bulkDelete(100))
                        .then(message.channel.bulkDelete(100))
                        .then(message.channel.bulkDelete(100))
                        .then(message.channel.bulkDelete(args[1]-900))
                    }
                    else if(args[1]>1000){
                        return message.reply('I dont clearing of messages above 1000');
                    }
                    else{
                        return message.reply('Invalid args');
                    }
                    const ded = new Discord.MessageEmbed()
                    .setTitle('moderation')
                    .addField('you succesfully cleared ' + args[1] + ' messages')
                    message.channel.send(ded); 
                    
                    
                }

                return true;
            
            }
               
            else{ 
                message.channel.send('you got no permsission to do it')
                message.delete()
                .then(message.channel.bulkDelete('1'))
                .then( message.member.send('there was an error while performing that function : ' + 'you can not do that!'))
               
           
            }
            break; 
        case 'mute':
            if(message.member.roles.cache.find(role => role.name === 'Staff')){
            message.delete();
            let person =message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[1]))
            if(!person) return message.reply('Please send a valid username to mute');
            let mainrole = message.guild.roles.cache.find(role => role.name === 'member');
            let muterole = message.guild.roles.cache.find(role => role.name === 'Muted');

            if(!muterole) return message.reply('There is no muted role present in the server')

            let time = args[2];

            if(!args[2]) return message.reply('Please enter a time limit to mute the user');
            if(args[1] === bot.user.tag) return message.reply('Dont act oversmart and dont try to mute me or I will mute You')
            if(args[1]=== `@${message.author}`) return message.reply('you cant mute ur self')
           
            person.roles.add(muterole.id);
           if(!args[3]) return message.reply('please speecify a reason to mute')
            let ok = args.slice(3).join(' ')

            

            const g = new MessageEmbed()
            .setTitle('Moderation')
            .addField('Muted',person.displayName,true)
            .addField('Staff',message.author.tag,true)
            .addField('time',time,true)
            .addField('reason',ok,true)

            message.channel.send(g)

            setTimeout(function(){
                
                person.roles.remove(muterole.id)
                const l = new MessageEmbed()
                .setTitle('Moderation')
                .addField('Unmuted',person.displayName,true)
                .addField('Staff',bot.user.tag,true)
                message.channel.send(l)
            },ms(time));
        }
        else{
            message.reply('No permission')
        }
            break;
        case 'unmute':
            if(message.member.roles.cache.find(role => role.name === 'staff')){
            message.delete();
            if(!args[1]) return message.reply('please mesntion a user to unmuted')
            let pers =message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[1]))
            if(!pers) return message.reply('please enter a valid username(who is there in the server');
            let mainrol = message.guild.roles.cache.find(role => role.name === 'member');
            let muterol = message.guild.roles.cache.find(role => role.name === 'muted');

           if( pers.roles.cache.find(role => role.name === 'Muted')){
               
               pers.roles.remove(muterol)
               const m = new MessageEmbed()
               .addField('Unmuted',pers.displayName,true)
               .addField('Staff',message.author.tag,true)
               .setTitle('Moderation')
               message.channel.send(m)
           }
        
           else
           {
               message.reply('The user mentioned is probably not muted')
           }
        } 
        else{
            message.delete
            message.reply('No permission')
        }
           break;


        case 'suggest':
           
            message.delete();
            let cut =args.slice(1).join(' ')
            if(!args[1] ){
                 return message.reply('please enter what u wanna suggest')
            }
            else{
                let sChannel = message.guild.channels.cache.find(x => x.name === 'ꜱɴ┇suggestions');
                if(!sChannel) return message.channel.send('your server has no suggestions channel')
            const a = new MessageEmbed()
            .setFooter(message.author.username)
            .setTitle('Suggestion')
            .setDescription(cut)
            sChannel.send(a).then(messageReaction =>{
                messageReaction.react("👎");
                messageReaction.react("👍");
                message.delete().catch(console.error);
            })
            return ;
            }
        case 'ddev':
            if((message.author.id == 688237610636017714) || (message.author.id == 420616930819309589)){

            let ddev = message.guild.roles.cache.find(role => role.name === 'Discord Dev')
            if(!args[1]) return;
            if(!args[2]) return;
            if(!ddev) return;
            let per = message.guild.member(message.mentions.users.first())
            if(!per ) return;
            if(args[1] === 'add'){
                if(per.roles.cache.find(role => role.name===('Discord Dev'))) return;
                per.roles.add(ddev)
            }
            else if(args[1] ==='remove'){
                if(!per.roles.cache.find(role => role.name===('Discord Dev'))) return;
                per.roles.remove(ddev)
            }
            else{
                message.reply('invalid args')
            }
        }
            
            break;
        case 'warn':
            message.delete()
            if(message.member.roles.cache.find(role => role.name ==='Staff')){
                if(!args[1]) return message.reply('Please mention a user to mute')
                .then(message.channel.send('`Usage -warn <user> <reason>`'));
                let perso =message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[1]))
                if(!perso) return message.reply('Invalid user')
                .then(message.channel.send('`Usage -warn <user> <reason>`'));
                if(!args[2]) return message.reply('Please specify a reason for warn')
                .then(message.channel.send('`Usage -warn <user> <reason>`'));
                let gh = '**'+args.slice(2).join(" ") +'**';
                var ab = '1';
                let warn = message.guild.roles.cache.find(role => role.name === 'Warns*1');
                let war = message.guild.roles.cache.find(role => role.name === 'Warns*2');
                let wa = message.guild.roles.cache.find(role => role.name === 'Warns*3');
                let w = message.guild.roles.cache.find(role => role.name === 'Warns*4');
                let warns = message.guild.roles.cache.find(role => role.name === 'Manywarns');
                if(perso.roles.cache.find(role => role.name === 'Warns*1')){
                    ab = '2';
                    perso.roles.remove(warn.id)
                    perso.roles.add(war.id).catch(console.log(error))
                }
                else if(perso.roles.cache.find(role => role.name === 'Warns*2')){
                    ab = '3';
                    perso.roles.remove(war.id)
                    perso.roles.add(wa.id).catch(console.log(error))
                }
                else if(perso.roles.cache.find(role => role.name === 'Warns*3')){
                    ab = '4';
                    perso.roles.remove(wa.id)
                    perso.roles.add(w.id).catch(console.log(error))
                }
                else if(perso.roles.cache.find(role => role.name === 'Warns*4')){
                    ab = 'more than 4';
                    perso.roles.remove(w.id)
                    perso.roles.add(warns.id).catch(console.log(error))
                }
                else {
                    perso.roles.add(warn.id);
                }
                const hm = new MessageEmbed()
                .setTitle('Moderation')
                .addField("Warned",perso.displayName,true)
                .addField("Staff",message.member.displayName,true)
                .addField("Reason",gh,true)
                .addField("Warncount",ab,true)
                message.channel.send(hm);
                
                
            }
            else{
                return message.reply('No permissions').catch(console.log(error));
            }
            break;
        case 'announce':
            {
                if(message.channel.id == 641151742129602570 ){
                    if(!args[1]){
                        message.delete();
                        message.channel.send('please type something u want to announce')
                    }
                    else{
                        message.delete()
                        let desc = args.slice(1).join(' ')
                        const k = new MessageEmbed()
                        .setAuthor(message.author.username)
                        .setDescription(desc)
                        .setColor(0xF1C40F)
                        message.channel.send(k)
                        message.channel.send('@everyone')
                        message.member.send('your announcemnet has been send as' )
                        message.member.send(k)
                       
                        }
                }
                else{
                    message.delete()
                    message.reply('invalid channel')
                }
            }
            
    }

})

oof.on('message',message=>{
    let args = message.content.substring(PREFIX.length).split(" ");


    switch(args[0]){
        case 'help':
            const hi = new MessageEmbed()
            .setTitle('help')
            .setColor(0xFF0000)
            .setDescription('the command is under developement');
            
            message.member.send(hi);

            break;
        case 'say' :
            if((message.author.id == 688237610636017714) || (message.author.id == 420616930819309589)){
                message.delete()
                let hmm = '**'+ args.slice(1).join(" ")+'**';
                const gi = new MessageEmbed()
                .setDescription(hmm)
                
                .setColor(0xFF0000)

                return message.channel.send(gi);
            }
            break;
        case 'send':
            message.delete();
            if((message.author.id == 688237610636017714) || (message.author.id == 420616930819309589)){
                if(!args[1]) return message.reply('Usage -send <channel name> <message>');
                if(!args[2])  return message.reply('Usage -send <channel name> <message>');
                
                    
                 let   h = args[1];
                
                let gf =   message.guild.channels.cache.find(x => x.name === h );
                if(!gf) return message.reply('invalid channel');
                let pe = '**' + args.slice(2).join(" ")+'**';
                let hj = new MessageEmbed()
                .setDescription(pe)
                
                .setColor(0xFF0000)
                gf.send(hj);
            }
            break;
        case 'poll':
            const b = new MessageEmbed()
           .setColor(0xFFC300)
           .setTitle('Poll')
           .setDescription('-poll to create a simple poll');

           if(!args[1]) return message.channel.send(b);
           if(message.channel.id == 690974232410193990 ){
           let p = args.slice(1).join(" ");
           const f = new MessageEmbed()
           .setColor(0xFFC300)
           .setTitle('Poll')
           .setDescription("**" +p+"**")
           .setFooter(`Poll created by ${message.author.tag}`);

           message.channel.send(f).then(messageReaction =>{
               messageReaction.react(`👎`);
               messageReaction.react(`👍`);
               message.delete().catch(console.error);
           })
        }
           break;
        case 'status':
            
            ping('play.skullnetwork.net',2187 ,(error,response) => {
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