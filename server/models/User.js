
import { Schema,model } from "mongoose";

const UserSchema=new Schema({
    name:{
    type:String,
    default:'-'
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },

    mobile:{
        type:String,
        // default:"0"
        unique:true,
        required:true
    },
    address:{
        type:String,
        default:"-"
    },
    gender:{
        type:String,
        default:"not prefer to say"
    }

})
const User=model("User",UserSchema)
export default User;