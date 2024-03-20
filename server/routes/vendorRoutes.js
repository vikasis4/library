const express=require("express");
const { login, signup } = require("../controller/vendorController");
// const { createuser, login } = require("../controller/userController");
// const { createProduct } = require("../controller/productController");
const router=express.Router();
router.route("/login").post(login);
router.route("/signup").post(signup);
module.exports = router 