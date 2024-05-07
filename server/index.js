import express from 'express';
import { mongoConnect } from './db/mongo.js';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

async function startServer() {
   await mongoConnect();
 
   app.listen(PORT, () => {
     console.log(`Listening on port ${PORT}...`);
   });
 }
 

 startServer();