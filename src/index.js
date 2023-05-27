const express = require('express');

const userRouter = require('./routes/userRoutes');
const mongoose =require('mongoose')
require("dotenv").config()


const app = express();

app.use(express.json());

app.use((req,res,next)=>{
    console.log("HTTP method - " + req.method + " , URL- " + req.url);
    next();
})


app.use("/user",userRouter);

app.get('/',(req,res)=>{
    res.send('Hello, welcome to sign up')
})

mongoose
 .connect(process.env.MONGO_URI)
 .then(()=>{
    //starting the server and specifying the port, making sure app created after connecting to db
    app.listen(5005,()=> {
        console.log('Signup  is running');
    })
    console.log('connected to mongoDB')
 }).catch((error)=>{
    console.log(error)
 })