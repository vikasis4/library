const Admin=require("../model/adminModel") 
exports.adminSignup=async(req,res)=>{
    let user=req.body
    email=user.email;
    try {
        let user2=await Admin.findOne({email});
        if (user2) return res.status(202).json({
            sucess:"duplicate"
        })
        admin= await Admin.create(req.body);
        res.status(201).json({
            sucess:'true',
            admin
        });
    } catch (error) {
        res.status(404).json({
            sucess:'false',
            error
        })
    }
    // console.log(admin);
}
// login
exports.loginAdmin=async(req,res)=>{
    let {email,password}=req.body;
    try {
        let user=await Admin.findOne({email}).select('+password');
        if(user){
            if(user.password==password){
                res.status(201).json({
                    sucess:"true",
                    user
                })
            }
            else{
                res.status(404).json({
                    sucess:"false",
                    
                })
            }
        }
    } catch (error) {
        res.status(400).json({
            sucess:"ISE"
        })
    }

}