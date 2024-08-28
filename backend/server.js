import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"


// app config
const app = express()
const port = 4000

// Middleware
app.use(express.json())    //requests from frontend will be parsed  using json
app.use(cors())          //access the backend from any backend

// db connection
connectDB();

// API Endpoints
app.use("/api/food", foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.get("/", (req,res)=> {
    res.send("API Working")
})

app.listen(port, ()=>{
    console.log(`Server Started on httpp://localhost:${port}`)
})

// mongodb+srv://abdul:468AVqD6eGYrgjbS@cluster0.xtz4c.mongodb.net/?