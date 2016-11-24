//aparently here i'm creatign a knex connection or instance that will work with this database - a sqlite one.
const knex = require("knex")({
	client:'sqlite3',
	//there is no password or things like this in sqlite databases? hum, i have to take a look in this thing.
	connection:{
		filename:'./hello.sqlite'
	},
	useNullAsDefault:true
});


//we just keep running the process if the use has passed as parameter the name
if(!process.argv[2]){
	console.log("Usage: node hello-node2.js <name>");
	process.exit(0);
}

//here i'm just adding the new name to the database, and the other things we alaready know from the last exercise.
knex("invited").insert({
	invited_name:process.argv[2]
}, "invited_id").then((ret)=>{
	console.log(`The invited had been inserted with the key ${ret[0]}`);
	process.exit(0);
}).catch((err)=>{
	console.log(err);
	process.exit(1);
});


