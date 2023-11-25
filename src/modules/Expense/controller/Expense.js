import ExpenseModel from "../../../../DB/model/Expense.model.js";

import { asyncHandler } from "../../../utils/errorHandling.js";

export const addExpense= asyncHandler(async(req,res,next)=>{
    const Expense= await ExpenseModel.create(req.body)
    return res.status(200).json({message:"done",Expense})
}) 

export const getExpenses = asyncHandler((async(req,res,next)=>{
   const Expenses= await ExpenseModel.find()
   return res.status(200).json({message:"done",Expenses}) 
}))
  
export const deleteExpense =asyncHandler((async(req,res,next)=>{
    const {id}=req.params
    const Expense= await ExpenseModel.findByIdAndDelete(id)
    if (Expense) {
        return res.status(200).json({message:"done",Expense}) 
    }
 }))