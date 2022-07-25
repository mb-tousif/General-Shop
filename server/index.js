import express  from "express";
import connection from "./DataBase/serverDB.js";
import dotenv from "dotenv";
import cors from "cors";
import Routes from "./routes/route.js";
import bodyParser from "body-parser";
dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
const corsConfig = {
  origin: true,
  Credential: true,
};
app.use(cors(corsConfig));
app.options("*", cors(corsConfig));

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

connection()

app.use("/", Routes)

app.listen(port, (req, res)=>{
    console.log("Welcome to server");
})