import express from "express"
import User from "../schemas/UserSchema.js";

const route = express.Router();

route.get("/users", (req, res) => {
    try {
        const users = User.find({})
        res.send(users)
    } catch (error) {
        res.status(500).send(error)
    }
})

export default route