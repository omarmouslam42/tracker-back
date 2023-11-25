import { Router } from "express";
import { addIncome, deleteIncome, getIncomes } from "./controller/income.js";
import { validation } from "../../middleware/validation.js";
import * as val from "./income.validation.js";


const router = Router()
router.post("/addIncome",validation(val.incomeVal),addIncome)

router.get("/",getIncomes)

router.delete("/deleteIncome/:id",validation(val.DeleteIncomeVal),deleteIncome)


export default router