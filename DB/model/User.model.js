
import { Schema, Types, model } from "mongoose";


const userSchema = new Schema({

    userName: {
        type: String,
        required: [true, 'name is required'],
        min: [2, 'minimum length 2 char'],
        max: [20, 'max length 2 char']

    },
    email: {
        type: String,
        unique: [true, 'email must be unique value'],
        required: [true, 'userName is required'],
    },
    password: {
        type: String,
        required: [true, 'password is required'],
    },
    phone: {
        type: String,
    },
    role:{
        type: String,
        default: 'User',
        enum:["User", "Admin"],
    }
}, 
{
    timestamps: true
})


const userModel = model('User', userSchema)
export default userModel