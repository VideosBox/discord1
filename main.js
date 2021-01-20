const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

client.once('ready', () => {
    console.log('Videos Box. is online!!!');
});

client.on('massage', massage => {
    if(!massage.contact.startWith(prefix) || massage.author.bot) return;

    const args = massage.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        massage.main-chat.send('pong!')
    }else if (command === 'youtube'){
        massage.channel.send(general) ('https.//www.youtube.com/Videos Box.')
    }
});

client.login('Nzk5MTY4MTg4MjEwMDg1ODg5.X__pXw.ImPHah4bfJRv_3X0LxlxCLMsR-E');

bot.login(process.env.token);