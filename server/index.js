import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import route from "./controllers/UserController";

const app = express();

app.use(express.json());
app.use(cors());
app.use(route);

const url = process.env.CONNECTION_URL.replace("<password>", process.env.PASSWORD)
const PORT = process.env.PORT

mongoose.connect(url).catch(err => {
    console.log("Database is not conected", err);
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})