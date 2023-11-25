import { model, Schema } from 'mongoose';

const ExpenseSchema = new Schema({
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
        default:"Expence" 
     },   
     category:{
        type:String,
        default:"Expense"
     },
     description:{
        type:String,
        required:true,
        trim:true
     }   
    
    
}, {
    timestamps: true
})

const ExpenseModel = model('Expense', ExpenseSchema)
export default ExpenseModel