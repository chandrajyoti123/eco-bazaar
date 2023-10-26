import express from "express"
import mongoose from "mongoose"
import User from "./models/User.js"
const app=express()
app.use(express.json())


import dotenv from 'dotenv'
dotenv.config();

const PORT=5000



const connectMongodb = async () => {
    const response = await mongoose.connect(process.env.MONGODB_URI)
    
    if (response) {
        console.log("mongodb  added successfully")
    }
}
connectMongodb()

app.post('/user', async(req,res)=>{
   const {name,email,password,mobile,address,gender}=req.body
   const NewUser=new User({
    name,email,password,mobile,address,gender
   })
  try{
    const saveduser=await NewUser.save()
    res.json({
     sucess:true,
     user:saveduser,
     message:"user logined successfully"
    })
  }
  
  catch(err){
    res.json({
        sucess:false,
         message:err.message
    })
  }


})

app.listen(PORT,()=>{
    console.log(`server is running in port ${PORT}`)
})
