import connectDB from '../DB/connection.js'
// import authRouter from './modules/auth/auth.router.js'
import incomeRouter from './modules/income/income.router.js'
import ExpenseRouter from './modules/Expense/Expense.router.js'
import { globalErrorHandling } from './utils/errorHandling.js'


const initApp = (app, express) => {
    app.use(express.json())
    app.get("/", (req, res, next) => {
        return res.status(200).json({message:"Welcome to Blog App"})
    })  
    // app.use(`/auth`, authRouter)
    app.use(`/income`, incomeRouter) 
    app.use(`/Expense`, ExpenseRouter) 

    app.all('*', (req, res, next) => {
        res.status(200).send("In-valid Routing , check url  or  method ")
    })
    app.use(globalErrorHandling)

    connectDB()

}

export default initApp