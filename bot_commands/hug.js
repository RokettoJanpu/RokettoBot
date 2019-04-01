module.exports = {
	name: `hug`,
	description: `Give a big bear hug to other users! <3`,
	execute(message, user, atUser, toUser, query, queryString, args, mentions){
        	a = args.join(` & `);
		botResponse = a?`:heart: ${user} passionately embraces ${a} :heart:`:
			`${user} hugs themself out of loneliness... :pensive:`;
        	message.channel.send(botResponse);
        	logResponse = botResponse;
	},
};
