//----------------------------imports
import express from "express";
import pg from "pg";
import dotenv from "dotenv"
//
dotenv.config()
//
let PORT = process.env.port || 3000
//----------------------------declaring express variable and use
const app = express();
app.use(express.json());
app.use(express.static('static'));
//----------------------------database variable
const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl:{
        rejectUnauthorized: false
    }
});
//----------------------------routes
////URL flexible GET routes
//////GET all table info
app.get('/api/:table', (req, res)=>{
    let table = req.params.table;
    pool.query(`SELECT * FROM ${table}`).then((data) => {
        if(data.rows){
            res.send(data.rows);
        }else{
            res.sendStatus(404);
        }
    });
});
//////GET specific table row
app.get('/api/:table/:row', (req, res)=>{
    let table = req.params.table;
    let row = req.params.row;
    pool.query(`SELECT * FROM ${table} WHERE id = $1`, [row]).then((data)=>{
        res.send(data.rows[0])
    });
});
//////POST routes
app.post("/api/:table", (req, res) => {
    let table = req.params.table;
    if(table === "employees"){
        let { first_name, last_name, avatar, username, email, phone_number } = req.body;
      pool
        .query(
          `INSERT INTO employees (first_name, last_name, avatar, username, email, phone_number) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
          [first_name, last_name, avatar, username, email, phone_number]
        )
        .then((datax) => {
          res.send(datax.rows[0]);
        });
    } else if(table === "projects"){
        let { project_name, category, flag, details, creator } = req.body;
        pool
        .query(
          `INSERT INTO projects (project_name, category, flag, details, creator) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
          [project_name, category, flag, details, creator]
        )
        .then((datax) => {
          res.send(datax.rows[0]);
        });
    } else if(table === "matching"){
        let { employee_id, project_id , mother_project} = req.body;
        pool
        .query(
          `INSERT INTO matching (employee_id, project_id ) VALUES ($1, $2, $3) RETURNING *`,
          [employee_id, project_id, mother_project]
        )
        .then((datax) => {
          res.send(datax.rows[0]);
        });
    }
  });
//////PATCH routes


//////DELETE routes
app.delete("/api/:table/:id", (req, res)=>{
    let table = req.params.table;
    let id = req.params.id;
    console.log(id)
    pool.query(`DELETE FROM ${table} WHERE id = $1`, [id]).then((data)=>{
        res.send(table +" id: " + id + " DELETED");
    });
});











//----------------------------catchall
app.use((err, req, res, next)=>{
    res.sendStatus(500);
});
//----------------------------Port in use
app.listen(PORT, ()=>{console.log(`Port ${PORT} firing`)});

//Object.keys(data.rows[0]).join(', ')