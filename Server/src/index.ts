import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import serverRouter from './routes/user.js';
import {MONGO_URL,JWT_SECRET} from "./config.js"

const app =express();

app.use(cors());
app.use(express.json());
app.use("/api",serverRouter);

async function main(){
    try{
        console.log("MongoString added");
        await mongoose.connect(MONGO_URL)
        console.log("String connected")
        app.listen(3000,()=>{
            console.log("listening server on port 5000")
        });
    }catch(err){
        console.log("error",err);
    }
}

main()




















