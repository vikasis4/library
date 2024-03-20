const mongoose = require("mongoose")
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "please enter product name"]
    },
    price: {
        type: Number,
        required: [true, "please enter product price"]
    },
    email: {
        type: String,
        required: [true, "email not found"]

    },
    images: {
        type: [String], // Defines an array of strings
        required: true
      },
    
    status:{
        type:Boolean,
        // required:[true,"avilable value not found"]
        default:true,
    },
    createdAt:{
        type:Date,
        default:Date.now

    },
    
    quantity:{
        type:Number,
        default:0

    },
    address:{
        type:String,
        

    }

})
module.exports=mongoose.model("Product",productSchema);