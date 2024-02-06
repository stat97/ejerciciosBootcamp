const { upload } = require("../../middleware/files.middleware");
const { registerConcert } = require("../controllers/Concert.controllers");
const express = require("express");
const ConcertRoutes = express.Router();

ConcertRoutes.post("/register", upload.single("image"), registerConcert);

module.exports = ConcertRoutes; 