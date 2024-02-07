const { upload } = require("../../middleware/files.middleware");
const { registerConcert,toggleMusic } = require("../controllers/Concert.controllers");
const express = require("express");
const ConcertRoutes = express.Router();

ConcertRoutes.post("/register", upload.single("image"), registerConcert);
ConcertRoutes.patch("/add/:id",toggleMusic); 
module.exports = ConcertRoutes; 

