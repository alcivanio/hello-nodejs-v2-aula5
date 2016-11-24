"use strict"

//index.js
let express = require("express");

const app = express();

app.get("/hello", (req, res)=>res.send("Olá mundo"));
app.listen(3000);
