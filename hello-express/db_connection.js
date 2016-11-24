//aparently here i'm creatign a knex connection or instance that will work with this database - a sqlite one.
const knex = require("knex")({
	client:'sqlite3',
	//there is no password or things like this in sqlite databases? hum, i have to take a look in this thing.
	connection:{
		filename:'./hello.sqlite'
	},
	useNullAsDefault:true
});

module.exports = knex;
