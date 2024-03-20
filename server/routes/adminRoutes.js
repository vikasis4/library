const express=require("express");
const { adminSignup, loginAdmin } = require("../controller/admincontroller");


const router=express.Router();
router.route("/adminSignup").post(adminSignup);
router.route("/loginAdmin").post(loginAdmin);
module.exports = router