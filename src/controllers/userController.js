const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY= "SECRETAPI";

const signup = async(req,res) =>{
    const {username,password,email} = req.body;

    //check existing user
    try{
        const existingUser = await User.findOne({email : email});
        if(existingUser){
            return res.status(400).json({message:"User already exists!"});
        }
        //password hashing
        console.log("print password");
        console.log(password);
        const hashedPassowrd= await bcrypt.hash(password,10);

        //new user creation
        const result= await User.create({
            username: username,
            password: hashedPassowrd,
            email: email
        });

        //generate token
        const token =jwt.sign({email: result.email, id:result._id},SECRET_KEY);
        res.status(201).json({user:result, token:token});
    }catch(error){
        console.log(error);
        res.status(500).json({message:"OOPS! Something went wrong."})
    }
}