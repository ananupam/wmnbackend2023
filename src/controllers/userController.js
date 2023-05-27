const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY= "SECRETAPI";

const signup = async(req,res) =>{
    const {username,password,email} = req.body;
    try{
        const existingUser = await User.findOne({email : email});
        if(existingUser){
            return res.status(400).json({message:"User already exists!"});
        }

        //password hashing
        const hashedPassowrd= await bcrypt.hash(password,10);
        console.log(User);
        //new user creation
        const result= await User.create({
            username: username,
            password: hashedPassowrd,
            email: email
        });
        console.log({username: username,
            password: hashedPassowrd,
            email: email});

        //generate token
        const token =jwt.sign({email: result.email, id:result._id},SECRET_KEY);
        res.status(201).json({user:result, token:token});
        console.log("user signup");
    }catch(error){
        console.log(error);
        res.status(500).json({message:"OOPS! Something went wrong."})
    }
}


const login = async(req,res) =>{
    const {email,password} = req.body;
    try{
        const existingUser = await User.findOne({email : email});

        if(!existingUser){
            return res.status(400).json({message:"User not found!"});
        }
        
        const matchPassword = await  bcrypt.compare(password,existingUser.password);
        if(!matchPassword){
            return res.status(400).json({message:"Wrong ID or password!"});
        }

        const token = jwt.sign({email: existingUser.email, id:existingUser._id},SECRET_KEY);
        res.status(201).json({user:existingUser, token:token});
        console.log("user logged in");
    }catch(error){
        console.log(error);
        res.status(500).json({message:"OOPS! Something went wrong."})
    }
}

module.exports = {signup,login}