const Order=require("../model/orderModel")
exports.placeorder=async(req,res)=>{
    try {
        const order=await Order.create(req.body);
        res.status(200).json({
            sucess:"true",
            order
        })
    } catch (error) {
        res.status(400).json({
            sucess:"false"
        })
    }
}
// update order status
exports.updateOrderStatus=async(req,res)=> {
    const{id,status}=req.body
    try {
        const order = await Order.findByIdAndUpdate(customer.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        });
        res.status(200).json({
            sucess:"true",
            order
        })
    } catch (error) {
        res.status(400).json({
            sucess:"false",

        })
    }
}
//delete order
exports.delteOrder=async(req,res)=>{
    try {
        const order=await Order.findOneAndRemove({_id:req.id})
        res.status(200).json({
            sucess:"true"
        })
    } catch (error) {
        res.status(400).json({
            succes:"false"
        })
    }
}