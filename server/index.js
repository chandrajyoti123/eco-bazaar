import express, { query } from "express"
import mongoose from "mongoose"
import User from "./models/User.js"
import Products from "./models/Products.js"
import Order from "./models/Orders.js"

const app=express()
app.use(express.json())
import dotenv from 'dotenv'
import Product from "./models/Products.js"
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
app.post('/loginuser', async(req,res)=>{
  const {email,password}=req.body
if(!email || !password){
    return res.json({
        sucess:false,
        message:"please enter email and password"
    })
  }
const loginuser=await User.findOne({
    email:email,
    password:password
  })
    // .select("address gender name mobile")
if(!loginuser){
    return res.json({
      sucess:false,
      message:"invalid credential"
    })
  }
 res.json({
    sucess:true,
    user:loginuser,
    message:"user find successfully"
  })
})
  
// --------get all product----------
app.get('/products',async(req,res)=>{
  const allProducts= await Products.find()
res.json({
  success:true,
  products:allProducts,
  message:"product fetched successfully"
})
})

// ----------post all product-----------
app.post('/eco-product', async(req,res)=>{
  const {name,description,price,image,category,brand}=req.body
  const postProduct=new Products({
    name:name,
    description:description,
    price:price,
    image:image,
    category:category,
    brand:brand
  })
  try{
    const savedproduct= await  postProduct.save()
  res.json({
    sucess:true,
    products:savedproduct,
    message:"product added successfully"
  })
  }
  catch(error){
    res.json({
      sucess:false,
      message:error.message
    })
  }
})

// ---------get product by id-----------
app.get('/eco-productbyid/:_id',async(req,res)=>{
  const {_id}=req.params
  const findOneProduct= await Products.findOne({_id:_id})
  res.json({
    success:true,
    products:findOneProduct,
    message:"product found successfully"
  })
})

// --------update product by id---------------
app.put('/eco-prouductupdate/:_id',async(req,res)=>{
  const {_id}=req.params
  const {name,description,price,image,category,brand}=req.body
    await Products.updateOne({_id:_id},{
    $set:{
      name:name,
      description:description,
      price:price,
      image:image,
      category:category,
      brand:brand
   }
  })
  const updatedProduct= await Products.findOne({_id:_id})
  res.json({
    sucess:true,
    products:updatedProduct,
    message:"product updated successfully"
  })
})

// -------delete product by id--------
app.delete('/eco-productdelete/:_id', async(req,res)=>{
  const {_id}=req.params
  await Products.deleteOne({_id:_id})
  res.json({
    sucess:true,
    message:"product deleted successfully"
  })
})

// --------search product----------
app.get('/searchproduct', async(req,res)=>{
  const {q}=req.query
   const searchproduct=await Products.findOne({name:{$regex:q, $options:'i'}})
   res.json({
    sucess:true,
    products:searchproduct,
    message:"product searched successfully"
  })
 })

//  ----------create  orders -------

app.post('/orders', async(req,res)=>{
  
  const {user, product , quantity , shipping_address , delivery_charges , status}=req.body
  const Orders=new Order({
    user:user,
    product:product,
    quantity:quantity,
    shipping_address:shipping_address,
    delivery_charges:delivery_charges,
    status:status
  })

  const savedOrders= await Orders.save()
  res.json({
    success:true,
    Order:savedOrders,
    message:" Order created successfully"

  })

})
// ----------get all orders -----------
app.get('/orders', async(req,res)=>{
  const Orders= await Order.find().populate('user  product')
  Orders.forEach((order)=>{
    order.user.password=undefined
  })

  res.json({
    success:true,
    orders:Orders,
    message:"order fetched successfully"
  })
})
// ---------get by user-----------
app.get('/byuserid/:_id', async(req,res)=>{
  const {_id}=req.params
  const findOrders= await Order.find({user:{_id:_id}}).populate('user  product')
  findOrders.forEach((order)=>{
    order.user.password=undefined
  })
  res.json({
    success:true,
    Order:findOrders,
    message:" Order of user founds successfully"  
   })
})

// -------------update-status--------
// app.patch('/updateorder/:_id',async(req,res)=>{
//   const {_id}=req.params
//   const {status}=req.body
  
//    await Order.updateOne({_id:_id},{$set:{status:status}})
//   const updatedOrder= await Order.findOne({_id:_id})
//   res.json({
//     success:true,
//     order:updatedOrder,
//     message:"order updated successfully"
//   })
// })
app.listen(PORT,()=>{
    console.log(`server is running in port ${PORT}`)
})
