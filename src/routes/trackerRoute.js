const express = require("express");

const {addTracker, getAllTracker} = require("../controllers/trackerController");

const trackerRouter = express.Router();


trackerRouter.post("/",addTracker);
trackerRouter.get("/",getAllTracker);

module.exports = trackerRouter;