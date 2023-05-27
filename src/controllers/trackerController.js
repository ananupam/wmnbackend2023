const Tracker = require("../models/trackerModel");

const getAllTracker = async(req,res)=>{
    try{
        const trackers = await Tracker.find({});
        res.status(200).json(trackers);
    }catch(error){
        console.group(error.message);
        res.status(500).json({message: error.message});
    }
}

const addTracker = async(req,res)=>{
    const {weight,period,mood} = req.body;
        const newTracker =new Doctor({
            weight: weight,
            period: period,
            mood: mood,
        });
    try{
        await newTracker.save();
        res.status(201).json(newTracker);  
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
}

module.exports = {getAllTracker, addTracker}