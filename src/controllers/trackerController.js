const Tracker = require("../models/trackerModel");

const getAllTracker = async(req,res)=>{
    try {
        const trackers = await Tracker.findOne({_id:"6472731d800627e4700f790e"});
        console.log(trackers.weight[0][5])
        res.status(200).json(trackers);
    } catch (error) {
        console.group(error.message);
        res.status(500).json({ message: error.message });
    }
}

const addTracker = async(req,res)=>{
    const twoDArray = new Array(12).fill().map(() => new Array(31).fill(0));

    const newTracker = new Tracker({
        weight: twoDArray,
        period: twoDArray,
        mood: twoDArray,
    });
    console.log(newTracker)
    try {
        await newTracker.save();
        res.status(201).json(newTracker);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

module.exports = {getAllTracker, addTracker}