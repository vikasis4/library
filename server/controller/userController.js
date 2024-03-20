const User=require("../model/userModel")
//create user
exports.createuser=async(req,res)=>{
    try {
        const user=await User.create(req.body);
        res.status(200).json({
            sucess:"true",
            user
        })
    } catch (error) {
        res.status(400).json({
            sucess:"false",

        })
    }
}
//login
exports.login=async(req,res)=>{
    const{email,password}=req.body;
    try {
        const user=await User.findone({email});
        if(!user){
            return res.status(200).json({
                sucess:"UNF"
            });
        }
        if(user.password==password){
            res.status(200).json({
                sucess:"true",
                user
            })
        }
        else{
            res.status(404).json({
                sucess:"false"
            })
        }

    } catch (error) {
        res.status(400).json({
            sucess:"ISE"
        })
    }
}