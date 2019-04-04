module.exports = {
	name: `hug`,
	description: `Give a big bear hug to other users! <3`,
	execute(message, user, atUser, toUser, query, queryString, args, mentions){
        let argList = args.join(` & `);
		botResponse = argList?`:heart: ${user} passionately embraces ${argList} :heart:`:
			`${user} hugs themself out of loneliness... :pensive:`;
        message.channel.send(botResponse);
        logResponse = botResponse;
	},
};
