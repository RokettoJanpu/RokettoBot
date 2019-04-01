module.exports = {
	name: `dick`,
	description: `How big is your dick?`,
	execute(message, user, atUser, toUser, query, queryString, args, mentions){
        searchWord = Math.round(Math.random())>0?`big penis`:`small`;
		botResponse = searchWord == `big penis` ? `Wow ${atUser}, you got a big dick! :eggplant:` : `Tsk tsk ${atUser}, you got a lil baby dick right there... :neutral_face:`;
		giphy.search(`gifs`, {"q": searchWord}).then((response) => {
			message.channel.send(botResponse, {
				files: [response.data[Math.floor(Math.random()*response.data.length)].images.fixed_height.url]
			})
		}).catch(() => {
            botResponse = `Error: Failed to find related dick gif!`;
            message.channel.send(botResponse);
        })
        logResponse = botResponse;
	},
};