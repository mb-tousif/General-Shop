import express  from "express";
import connection from "./DataBase/serverDB.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
const corsConfig = {
  origin: true,
  Credential: true,
};
app.use(cors(corsConfig));
app.options("*", cors(corsConfig));

connection()

app.listen(port, (res)=>{
    console.log("Welcome to server");
})