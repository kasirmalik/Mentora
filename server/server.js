import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/webhooks.js'
import educatorRouter from './routes/educatorRoute.js'
import { clerkMiddleware } from '@clerk/express'

//Intialize Express
const app = express()

// connect to db
await connectDB()

// Middleware

app.use(cors())
app.use(clerkMiddleware)

//Routes
app.get('/',(req,res)=>{
    res.send("api working")
})
app.post('/clerk',express.json(),clerkWebhooks)
app.use('/api/educator',express.json(educatorRouter))
//Port 
const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`App is Runing on Port ${PORT}`)
})