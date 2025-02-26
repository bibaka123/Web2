import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/user.route.js'

// app config
const app = express()
const port = process.env.PORT || 4000
connectDB()

const allowedOrigins = ["http://localhost:5173"]

// middlewares
app.use(express.json())
app.use(cors({ origin: allowedOrigins, credentials: true }))

// api endpoints
app.use('/api/user', userRouter)

app.get('/', (req, res) => {
    res.send("API WORKING")
})

app.listen(port, () => console.log('Sever Started', port))