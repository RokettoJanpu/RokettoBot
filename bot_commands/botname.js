module.exports = {
	name: `botname`,
	description: `Say my name...`,
	execute(message, user, atUser, toUser, query, queryString, args, mentions){
        botResponse = `My name is RokettoBot.`;
	message.channel.send(botResponse);
	logResponse = botResponse;
	},
};
