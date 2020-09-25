
const Discord = require('discord.js');
const client = new Discord.Client();
client.once('ready', () => {
	console.log('Ready!');
});
client.on('message', message => {
	if (message.content === 'ping') {
	message.channel.send('pong');
} else if (message.content === `beep`) {
	message.channel.send('boop');
} else if (message.content === `pp invite`) {
	message.channel.send('Add to your own server: https://discord.com/api/oauth2/authorize?client_id=749127861906047026&permissions=67584&scope=bot Join the official server: https://discord.gg/6snDc8');
} else if (message.content === `pp feedback`) {
	message.channel.send('To send feedback, please go to https://forms.gle/dQJ3LDsx2AVq3k2K7');
}  else if (message.content === `kidz`) {
	message.channel.send('kidz bop? no. kidz STOP');
}  else if (message.content === 'B') {
	message.react('🅱️');
} else if (message.content === `im lonely`) {
	message.channel.send('hi lonely. ill be your friend. but i dont have any code to respond cuz im at the time this message is being coded it is 10 pm but anyways ill be your friend. have a nice day           also i was not lazy, i just suck at coding');
} else if (message.content === `pp help`) {
	message.channel.send('hello. i am a bot that pings pongs. you are (probably) a human that likes when i ping pongs.  here are my commands: | pp help - this | pp feedback - lets you send feedback through a google form | pp invite - just lets you invite me to your own server or join le official one --non-prefix commands-- ping | the classic, also what i pong | beep - boop | kidz - stop | B - 🅱️ | If you have any questions or feedback, run the "pp feedback" command or DM shawdow108#5105');
} else if (message.content === `hotel`) {
	message.channel.send('trivago');
}  else if (message.content === `cryptic band that is making a new album and is cool`) {
	message.channel.send('shadow wolf, formed by the developer of this bot. they are realeasing a album titled Beautiful Death soon');

} else if (message.content === `ass`) {
	message.channel.send('dont curse on the christain roblox server');
}  else if (message.content === `fuck`) {
	message.channel.send('dont curse on the christain roblox server');
}  else if (message.content === `stfu`) {
	message.channel.send('no you');
}  else if (message.content === `shit`) {
	message.channel.send('pls dont curse');
}  else if (message.content === `hell`) {
	message.channel.send('HEAVEN');
} else if (message.content === `shell city`) {
	message.channel.send('https://www.youtube.com/watch?v=MlnDf3e3PQ0');
} else if (message.content === `g note`) {
  message.channel.send(`https://www.youtube.com/watch?v=RRKJiM9Njr8`)
}  else if (message.content === `POGGERS`) {
	message.channel.send('what do you think you are? a twitch streamer?');
}
});
client.login('PUT-YOUR-OWN-TOKEN-HERE');
