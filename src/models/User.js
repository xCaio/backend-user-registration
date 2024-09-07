import mongoose, { mongo } from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true
    }
})

export default mongoose.model('User', UserSchema)