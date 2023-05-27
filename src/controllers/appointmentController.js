const Appointment = require("../models/appointmentModel");

const getAllAppointment = async(req,res)=>{
    try{
        const appointments = await Appointment.find({});
        res.status(200).json(appointments);
    }catch(error){
        console.group(error.message);
        res.status(500).json({message: error.message});
    }
}

const addAppointment = async(req,res)=>{
    const {doctor, date, time, status} = req.body;
        const newAppointment =new Appointment({
            doctor: doctor,
            date: date,
            time: time,
            status: status,
        });
    try{
        await newAppointment.save();
        res.status(201).json(newAppointment);  
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
}

module.exports = {getAllAppointment, addAppointment}