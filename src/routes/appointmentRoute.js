const express = require("express");

const {addAppointment, getAllAppointment} = require("../controllers/appointmentController");

const appointmentRouter = express.Router();

appointmentRouter.post("/",addAppointment);
appointmentRouter.get("/",getAllAppointment);

module.exports = appointmentRouter;