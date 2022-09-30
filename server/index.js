import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/auth.js';
import './models/user.js';

const app = express();
const PORT = 5000;  

app.use(express.json());
app.use(router);


const customMiddleware = (req,res,next)=>{
    console.log("Middleware Executed!!!");
    next()
}





app.get("/home",(req,res)=>{
    console.log('hello from home page') //terminal
    res.send("I am home page") //browser
})
app.get("/login",customMiddleware,(req,res)=>{
    console.log('hello from login page') //terminal
    res.send("I am login page") //browser
})

app.listen(PORT,()=>{
    console.log("SERVER RUNNING ON;",PORT) //terminal
})





app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://socialnetwork:socialnetwork@cluster0.wstdk.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(CONNECTION_URL).then(()=>{
    console.log(`SERVER CONNECT THROUGH THIS PORT: ${PORT}`)
})