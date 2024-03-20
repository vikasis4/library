const express=require("express");
const { createuser, login } = require("../controller/userController");
// const { createProduct } = require("../controller/productController");
const router=express.Router();
router.route("/createuser").post(createuser);
router.route("/login").post(login);
module.exports = router