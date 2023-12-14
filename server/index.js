import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import route from "./controllers/UserController.js";
import dotenv from "dotenv"

const app = express();
dotenv.config()

app.use(express.json());
app.use(cors());
app.use(route);

const PORT = process.env.PORT
const url = process.env.CONNECTION_URL.replace("<password>", process.env.PASSWORD)

mongoose.connect(url).catch(err => {
    console.log("Database is not conected", err);
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})