// Require the necessary discord.js classes
const fs = require('node:fs');
const path = require('node:path');
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const { MessageEmbed } = require('discord.js');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('bomb activated');
	client.user.setActivity('ping pong');
});


client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('pong');
	} else if (commandName === 'beep') {
        await interaction.reply('boop');
	} else if (commandName === 'invite') {
		await interaction.reply('Invite the bot here: https://found.ee/ping_pong');
	} else if (commandName === 'help') {
		await interaction.reply('ping pong uses the new ultra-fancy Discord slash commands\n\n\u2022 ping ~ recieve a pong for the low price of four letters on your keyboard\n\u2022 beep ~ boop beep boop beep boop boop\n\u2022 invite ~ invite the bot to a server of your own and help spread this disease\n\u2022 help ~ this\n\u2022 fruits ~ some tasty fruit (powered by message reactions)\n\n join the official ping pong discord server here ~ https://discord.gg/XPxQgeZBA2');
	} else if (commandName === 'fruits') {
		const message = await interaction.reply({ content: 'enjoy the fruit!', fetchReply: true });

		try {
			await message.react('🍎');
			await message.react('🍊');
			await message.react('🍇');
		} catch (error) {
			console.error('One of the emojis failed to react:', error);
		}
	}
});

// Login to Discord with your client's token
client.login(token);