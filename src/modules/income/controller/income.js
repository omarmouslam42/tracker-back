import incomeModel from "../../../../DB/model/Income.model.js";
import { asyncHandler } from "../../../utils/errorHandling.js";

export const addIncome= asyncHandler(async(req,res,next)=>{
    const income= await incomeModel.create(req.body)
    return res.status(200).json({message:"done",income})
}) 

export const getIncomes=asyncHandler((async(req,res,next)=>{
   const incomes= await incomeModel.find()
   return res.status(200).json({message:"done",incomes}) 
}))

export const deleteIncome =asyncHandler((async(req,res,next)=>{
    const {id}=req.params 
    const income= await incomeModel.findByIdAndDelete(id)
    if (income) {
        return res.status(200).json({message:"done",income}) 
    } 
 }))