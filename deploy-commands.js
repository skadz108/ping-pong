const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('The pong to your ping.'),
	new SlashCommandBuilder().setName('beep').setDescription('Beep boop. Bloop doop deep? Beep boop bop!'),
	new SlashCommandBuilder().setName('invite').setDescription('Invite the bot to your own server!'),
	new SlashCommandBuilder().setName('help').setDescription('Lists the available commands.'),
	new SlashCommandBuilder().setName('fruits').setDescription('Some tasty fruit!')
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationCommands(clientId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);