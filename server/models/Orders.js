import { Schema,model } from "mongoose";

const orderschema=new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    product:{
        type:Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },
    quantity:{
        type:Number,
        default:1
    },
    shipping_address:{
        type:String,
    
    },
    delivery_charges:{
        type:Number,
        default:0
    },
    status:{
        type:String,
        default:"pending"
    }
},{
    timestamps:true
})

const Order=model("Order",orderschema)
export default Order;