const { upload } = require("../../middleware/files.middleware");
const { registerMusic, toggleConcert } = require("../controllers/Music.controllers");
const express = require("express");
const MusicRoutes = express.Router();

MusicRoutes.patch("/add/:id",toggleConcert); 
MusicRoutes.post("/register", upload.single("image"), registerMusic);

  //creo la ruta de toggle.
module.exports = MusicRoutes; 
