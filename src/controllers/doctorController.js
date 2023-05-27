const Doctor = require("../models/doctorModel");

const getAllDoctors = async(req,res)=>{
    try{
        const doctors = await Doctor.find({});
        res.status(200).json(doctors);
    }catch(error){
        console.group(error.message);
        res.status(500).json({message: error.message});
    }
}

const addDoctor = async(req,res)=>{
    const {name, speciality, experience, gender} = req.body;
        const newDoctor =new Doctor({
            name: name,
            speciality: speciality,
            experience: experience,
            gender: gender,
        });
    try{
        await newDoctor.save();
        res.status(201).json(newDoctor);  
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
}

module.exports = {getAllDoctors, addDoctor}