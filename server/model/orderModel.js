const mongoose = require("mongoose")
const orderSchema = mongoose.Schema({
    userId: { type: String, required: true }, // 用户id
       
    name: {
        type: String,
        required: [true, "please enter product name"]
    },
    // price: {
    //     type: Number,
    //     required: [true, "please enter product price"]
    // },
    email: {
        type: String,
        required: [true, "email not found"]

    },
    vendoremail: {
        type: String,
        required: [true, "email not found"]

    },
    // images: {
    //     type: [String], // Defines an array of strings
    //     required: true
    //   },
    
    status:{
        type:String,
        // required:[true,"avilable value not found"]
        default:true,
    },
    createdAt:{
        type:Date,
        default:Date.now

    },
    products:[
        {
            product_id:{
                type:String,
                required:[true,"enter Product id"],

            },
            quantity:{
                type:Number,
                required:[true,"enter quentity of this product"]
            }
        }
    ],
    
    
    address:{
        type:String,
        

    }

})
module.exports=mongoose.model("Order",orderSchema);