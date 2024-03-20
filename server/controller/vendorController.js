const Vendor = require("../model/vendorModel");
const { login } = require("./userController");
//signup
exports.signup = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        let vendor = await Vendor.findOne({ email });
        if (vendor) return res.status(400).json({
            sucess: "duplicate",
        });
        vendor = await Vendor.create({
            name,
            email,
            password
        });
        res.status(200).json({
            sucess: "true",
            userId: vendor._id,
            name: vendor.name,
            email: vendor.email
        })
        // if(vendor)
    } catch (error) {
        res.status(400).json({
            sucess: "false"
        })
    }
}
exports.login = async (req, res) => {
    let { userId, password } = req.body;
    var email = userId;
    try {
        let vendor = await Vendor.findOne({ email }).select('+password');
        console.log(vendor);
        if (vendor) {
            if (vendor.password == password) {
                res.status(201).json({
                    sucess: "true",
                    userId: vendor._id,
                    name: vendor.name,
                    email: vendor.email

                })
            }
            else {
                res.status(404).json({
                    sucess: "false",

                })
            }
        }
    } catch (error) {
        res.status(400).json({
            sucess: "ISE"
        })
    }
}