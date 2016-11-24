"use strict"

//index.js
let express = require("express");

const app = express();


app.get("/hello", (req, res)=>res.send("Olá pessoa"));
app.get("/hello", (req, res)=>res.send("Olá mundo"));


app.get("/greet", (req, res, next)=>{
	if (req.query.nome) res.send(`Olá, ${req.query.nome}!`);
	else res.send("Olá, estranho.");
});


app.listen(3000);
