const express = require("express");

const {addDoctor, getAllDoctors} = require("../controllers/doctorController");

const doctorRouter = express.Router();

doctorRouter.post("/",addDoctor);
doctorRouter.get("/",getAllDoctors);


module.exports = doctorRouter;