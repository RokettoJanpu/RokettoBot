module.exports = {
	name: `repeat`,
	description: `Simon says!`,
	execute(message, user, atUser, toUser, query, queryString, args, mentions){
        botResponse = query?query:`What am I supposed to say, dumbass? ${atUser}`;
        logResponse = botResponse;
	},
};