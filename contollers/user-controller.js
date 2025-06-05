const User = require("../models/user.js");


const register = async (req, res)=>{
    try{
        //get username email password from the body eg form inputs
        const {username, email, password, role} = req.body;

        //check if user exists


    }catch(e){
         res.status(404).json({
      success: false,
      message: "Something went wrong. Please try again",
    });
    }
}

//

const login = async (req, res)=>{
    try{

    }catch(e){
         res.status(404).json({
      success: false,
      message: "Something went wrong. Please try again",
    });
    }
}

//

module.exports = {register, login};