const pg = require("pg");
const path = require("path");
const express = require("express");

const PORT = process.env.PORT || 2000;

const app = express()
    .use(express.json())
    .get('/',(req,res)=>{
        res.sendFile(path.join(__dirname,"index.html"))
    })
;

const server = app.listen(PORT,()=>console.log(`Server listening on port ${PORT}...`));