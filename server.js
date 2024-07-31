
require('dotenv').config()

const express = require('express')

const router = require('./router/auth-router')

const cors = require('cors')

const PORT = process.env.PORT;

const app =express()

app.use(cors())
const connectDb = require('./utils/db')

app.use(express.json())
app.use('/api/auth',router)


connectDb().then(()=>{
    app.listen(PORT,()=>console.log(`server is running at http://localhost:${PORT}`))
    
})



