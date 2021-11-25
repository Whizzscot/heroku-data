const fs = require("fs");
const path = require("path");
const express = require("express");

const PORT = process.env.PORT || 2000;

const app = express()
    .use(express.json())
    .get('/',(req,res)=>{

    })
;

const server = app.listen(PORT,()=>console.log(`Server listening on port ${PORT}...`));