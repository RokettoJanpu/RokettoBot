module.exports = {
	name: `pupper`,
	description: `WHO'S A GOOD PUPPER? YES, YOU ARE!`,
	execute(message, user, atUser, toUser, query, queryString, args, mentions){
		searchTerms = [`pup`,`pupper`,`dog`,`doggy`,`doggo`,`little dog`,`big dog`];
		searchWord = searchTerms[Math.floor(Math.random()*searchTerms.length)];
		botResponse = `Incoming ${searchWord}! :dog:`;
		giphy.search(`gifs`, {"q": searchWord}).then((response) => {
			message.channel.send(botResponse, {
				files: [response.data[Math.floor(Math.random()*response.data.length)].images.fixed_height.url]
			})
		}).catch(() => {
            botResponse = `Error: Failed to find related ${searchWord} gif! :pensive:`;
            message.channel.send(botResponse);
        })
        logResponse = botResponse;
	},
};