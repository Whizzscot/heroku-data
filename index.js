const path = require("path");
const express = require("express");
const { Pool } = require('pg');
const pool = new Pool({
    connectionString: process.env.DATABASE_URL/* || "postgresql-colorful-38659"*/,
    ssl: {
        rejectUnauthorized: false
    }
});

const PORT = process.env.PORT || 2000;

const app = express()
    .use(express.json())
    .get('/',(req,res)=>{
        res.sendFile(path.join(__dirname,"index.html"))
    })
    .get('/db', async (req,res)=>{
        try{
            const client = await pool.connect();
            const result = await client.query('SELECT * FROM test_table');
            const results = { 'results': (result) ? result.rows : null};
            res.send(results);
            client.release();
        } catch (err){
            console.error(err);
            res.status(500).send(err);
        }
    });
;

const server = app.listen(PORT,()=>console.log(`Server listening on port ${PORT}...`));