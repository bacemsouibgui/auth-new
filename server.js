// require express
const express= require('express');
// init express
const app= express()

// require the router
const authRouter= require('./routes/auth')
// require connectDB
const connectDB= require('./config/connectDB')

// Middleware== parse the data to json
app.use(express.json())
// connectDB
connectDB()

app.use('/api/authent', authRouter)

// lunch the server
const port= 5000;

app.listen(port, (error)=> {
    error? console.log(error)
    : console.log(`the server is running on port ${port}`)
})