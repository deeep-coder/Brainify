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





















// (async() =>{
//     try{
//        await mongoose.connect(`${process.env.MONGODB_URL}`)
//     }catch(error){
//      console.error("ERROR",error)
//      throw error;
//     }

// })()


// const app =express();

// app.use(express.json())

// //signup route
// app.post("/api/v1/signup", async (req,res)=>{
//     //using zod
//     const{username,password} = req.body;

//     if(!username || !password){
//         return res.status(400).json({
//             msg:"Missing inputs"
//         })
//     }

//     try{
//         //hashing password
//         const salt= await bcrypt.genSalt(5);
//         const hashPassword=await bcrypt.hash(password,salt);

//         await UserModel.create({
//             username:username,
//             password:hashpassword
//         })

//         return res.status(200).json({
//             msg:"Signed Up"
//         })
//     }
//     catch (err:any){
//       if(err.code ===11000){
//         //duplicate username
//         return res.status(409).json({
//             msg:"User Already exists"
//         });
//       }
//     }

//     //other unknown errors
//     console.error("SignUp Error",err);
//     return res.status(500).json({
//         msg:"Somethisng went wrong",
//         error:err.message
//     })
    

// });

// app.post("/api/v1/signin", (req,res)=>{

// });

// app.post("/api/v1/content", (req,res)=>{

// });

// app.get("/api/v1/content", (req,res)=>{

// });

// app.delete("/api/v1/content", (req,res)=>{

// });

// app.post("/api/v1/brain/share", (req,res)=>{

// });

// app.get("/api/v1/brain/:shareLink", (req,res)=>{

// });

// app.listen(process.env.PORT , ()=>{
//     console.log(`App is listening on PORT : ${process.env.PORT}`);
    
// });



