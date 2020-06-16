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
    let memberrole = member.guild.roles.cache.find(role => role.name === 'Member');
    member.roles.add(memberrole);
});
bot.on('message',message=>{
   
    

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
            let mainrole = message.guild.roles.cache.find(role => role.name === 'Member');
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
            let muterol = message.guild.roles.cache.find(role => role.name === 'Muted');

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
        case 'report':
            message.delete()
            if(!args[1]) return message.channel.send('`Usage -report <username> <report>`');
            if(!args[2]) return message.channel.send('`Usage -report <username> <report>`');
            let per =message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[1]))
            if(!per) return message.reply('Invalid User');
            let mn = args.slice(2).join(" ");
            const me = new MessageEmbed()
            .setTitle("Player Reports")
            .setThumbnail(message.author.displayAvatarURL(true))
            .addField('User',per.displayName,true)
            .addField('Reported by',message.member.displayName,true)
            .addField('Reason',mn,true)
            .setFooter(` ${per} has been reported by ${message.author.tag}`);
            message.channel.send(me);
            let rChannel = message.guild.channels.cache.find(x => x.name === 'ꜱɴ┇reports');
            if(!rChannel) return;
            rChannel.send(me)
            message.reply(`thanks for reporting ${per.displayName}`)
            break;
        case 'bug':
            message.delete();
            if(!args[1]) return message.channel.send('`USAGE -bug <bug>`')
            let bChannel = message.guild.channels.cache.find(x => x.name === 'ꜱɴ┇bugs');
            if(!bChannel) return;
            let jk = args.slice(1).join(" ");
            const mes = new MessageEmbed()
            .setTitle("Bug Reports")
            .setThumbnail(message.author.displayAvatarURL(true))
            .setDescription(jk)
            .setFooter(`The bug is reported by ${message.author.tag}`);
            bChannel.send(mes);
            message.channel.send(mes)
            message.reply('Thanks for submitting your bug report' );
            break;
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
        case 'coinflip':
            message.delete();
            const win = 'Win';
            const lose = 'Lose';
            var choices =[
                "heads",
                "tails"
            ];
            var output = choices[Math.floor(Math.random()*choices.length)];
            if(args[1]==='heads'){
                if(output === args[1]){
                    message.channel.send('You won');
                    const lm = new MessageEmbed()
                    .setTitle('Games')
                    .setImage('data:image/jpeg;base64,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')
                    
                    .addField('Result',win,true)
                    message.channel.send(lm);
                }
                else{
                    message.channel.send('You lose');
                    const lk = new MessageEmbed()
                    .setTitle('Games')
                    .setImage('data:image/jpeg;base64,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')
                    
                    .addField('Result',lose,true)
                    message.channel.send(lk);
                }
            }
            else if(args[1]==='tails'){
                if(output === args[1]){
                    message.channel.send('You won');
                    const lo = new MessageEmbed()
                    .setTitle('Games')
                    .setImage('data:image/jpeg;base64,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')
                    
                    .addField('Result',win,true)
                    message.channel.send(lo);
                }
                else{
                    message.channel.send('You lose');
                    const lp = new MessageEmbed()
                    .setTitle('Games')
                    .setImage('data:image/jpeg;base64,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')
                    
                    .addField('Result',lose,true)
                    message.channel.send(lp);
                }
            }
            else{
                message.channel.send('invalid arguments')
                .then(message.channel.send('```Usage -coinflip <heads/tails>```'));
            }
            break;
            

    }

})

bot.login(process.env.token);
oof.login(process.env.token);