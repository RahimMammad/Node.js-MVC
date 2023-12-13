import mongoose from "mongoose";

const {Schema} = mongoose

const UserSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }, 
    email: {
        type: String,
        unique: true,
        required: true
    },
    timestamps: true
})

const User = mongoose.model("user", UserSchema)
export default User