module.exports = {
	name: `test`,
	description: `Play around with MySQL database querying.`,
	execute(message, user, atUser, toUser, query, queryString, args, mentions){
		let id = atUser.id;
        let msg = query;
        dbase.query(`insert into test values (${id}, "${msg}")`, (err, result) => {
            if(err){
                console.log(`Error! Couldn't add to the database: ${err}`);
                throw err;
            }
            botResponse = `Successfully added entry - userID: ${id}, message: ${msg}`;
            message.channel.send(`${atUser} ${botResponse}`);
        })
		logResponse = `Database | ${botResponse}`;
	},
};
