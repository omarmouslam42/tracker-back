import { model, Schema, Types } from 'mongoose';

const incomeSchema = new Schema({
    title: { 
        type: String,
        required: true,
        maxLength:50
    },
    amount: { 
        type: Number,
        required: true,
        maxLength:20
        },
     date:{
        type: Date,
        required:true,
     },
     type:{
        type:String,
        default:"income"
     },   
     category:{
        type:String,
        default:"income"
     },
     description:{
        type:String,
        required:true,
        trim:true
     }   
    
    
}, {
    timestamps: true
})

const incomeModel = model('Income', incomeSchema)
export default incomeModel