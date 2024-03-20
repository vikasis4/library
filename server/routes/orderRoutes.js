const express=require("express");
const { placeorder, updateOrderStatus } = require("../controller/ordercontroller");



const router=express.Router();
router.route("/placeorder").post(placeorder);
router.route("/updateOrderStatus").post(updateOrderStatus);
module.exports = router