const express=require("express");
const bodyParser = require("body-parser");
const app=express();
const admin=require("./routes/adminRoutes")
const order=require("./routes/orderRoutes")
const product=require("./routes/productroutes")
const user=require("./routes/userRoutes")
const vendor=require("./routes/vendorRoutes")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
const cors=require("cors")
app.use(cors({
    origin: "*"
}))
app.use("/api/v1/admin",admin);
app.use("/api/v1/order",order);
app.use("/api/v1/product",product);
app.use("/api/v1/user",user);
app.use("/api/v1/vendor",vendor);

app.post("/demo",(req,res)=>{
    res.json({
        name:"BigInt",
        price:45,
        
    })
})
module.exports=app;