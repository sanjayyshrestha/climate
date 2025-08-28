import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { connectDB } from './config/db.js'

dotenv.config()
const app=express()
const PORT=process.env.PORT

app.use(cors({
  origin:'http://localhost:5173',
  credentials:true
}))


app.use(express.json({limit: '5mb'}));
app.use(cookieParser())

app.use('/api/auth',authRoutes)


connectDB()
.then(()=>{
  app.listen(PORT,()=>{
    console.log(`Server is listening at port : ${PORT}`)
  })
})
.catch(err=>{
  console.log(err)
  process.exit(1)
})