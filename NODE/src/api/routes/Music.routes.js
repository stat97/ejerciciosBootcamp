const { upload } = require("../../middleware/files.middleware");
const { registerMusic } = require("../controllers/Music.controllers");
const express = require("express")
const MusicRoutes = express.Router();

MusicRoutes.post("/register", upload.single("image"), registerMusic);

module.exports = MusicRoutes; 