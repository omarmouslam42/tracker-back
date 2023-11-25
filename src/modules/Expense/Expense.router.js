import { Router } from "express";
import { addExpense, deleteExpense, getExpenses } from "./controller/Expense.js";
import * as val from "./Expense.validation.js";
import { validation } from "../../middleware/validation.js";



const router = Router()
router.post("/addExpense", validation(val.ExpenseVal),addExpense)

router.get("/Expenses",getExpenses)

router.delete("/deleteExpense/:id",validation(val.DeleteExpenseVal), deleteExpense)


export default router