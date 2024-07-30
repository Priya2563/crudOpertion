import express from 'express';
import connection from './database/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes/route.js';
import bodyParser from 'body-parser';
const app = express();
dotenv.config();
app.use(bodyParser.json({extended:true }));

app.use(cors());

const port = 8000;
app.use('/', routes);
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
connection(username, password);

app.listen(port, ()=>{
  console.log(`your server is running ${port}`);
});
