const express=require("express");
const { createProduct, editproduct, deleteproduct, getvendorproducts } = require("../controller/productController");
const router=express.Router();
router.route("/createProduct").post(createProduct);
router.route("/delete-product").post(deleteproduct);
router.route("/edit-product").post(editproduct);
router.route("/getvendorproducts").post(getvendorproducts);
module.exports = router