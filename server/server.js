import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'

//Intialize Express
const app = express()

// connect to db
await connectDB()

// Middleware

app.use(cors())

//Routes
app.get('/',(req,res)=>{
    res.send("api working")
})

//Port 
const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`App is Runing on Port ${PORT}`)
})