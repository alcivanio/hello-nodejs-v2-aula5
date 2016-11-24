const knex = require("./db_connection");
const express = require("express");

const app = express();

app.get("/invited", (req,res)=>{
	knex("invited").select().then((ret)=>{
		res.send(ret);	
	});
});

app.listen(3000);
