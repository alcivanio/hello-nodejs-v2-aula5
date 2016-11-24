//aparently here i'm creatign a knex connection or instance that will work with this database - a sqlite one.
const knex = require("knex")({
	client:'sqlite3',
	//there is no password or things like this in sqlite databases? hum, i have to take a look in this thing.
	connection:{
		filename:'./hello.sqlite'
	},
	useNullAsDefault:true
});



//here things will start working really - we're creating a table
knex.schema.createTable("invited", (table)=>{//here i put the table name
	//and some fields of the table
	table.increments("invited_id");
	table.string("invited_name");

}).then(()=>{
	//It seems that it will just get out of the method when it have get a successful answer... 
	console.log("Table has been created.");
	process.exit(0);

}).catch((err)=>{
	//obviously it will show an error, if it happens
	console.log(err);
	process.exit(1);
});

