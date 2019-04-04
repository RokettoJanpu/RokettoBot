module.exports = {
	name: `love`,
	description: `I need your bot love!`,
	execute(message, user, atUser, toUser, query, queryString, args, mentions){
        botResponse = `I love you berry, berry much ${atUser}! :strawberry:`;
		giphy.search(`gifs`, {"q": "fruit"}).then((response) => {
			atUser.send(botResponse, {
				files: [response.data[Math.floor(Math.random()*response.data.length)].images.fixed_height.url]
			})
		}).catch(() => {
            	botResponse = `Error: Failed to find related berry gif! :pensive:`;
            	atUser.send(botResponse);
        })
		logResponse = `Sent DM to ${user} (${atUser}): ${botResponse}`;
	},
};
