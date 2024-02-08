const { upload } = require("../../middleware/files.middleware");
const { registerMusic, toggleConcert,getById,getAll,getByName,update,deleteMusic } = require("../controllers/Music.controllers");
const express = require("express");
const MusicRoutes = express.Router();

MusicRoutes.post("/register", upload.single("image"), registerMusic);
MusicRoutes.patch("/add/:id",toggleConcert); 
MusicRoutes.get("/:id", getById);
MusicRoutes.get("/", getAll);
MusicRoutes.get("/byName/:name", getByName);
MusicRoutes.patch("/:id", upload.single("image"), update);
MusicRoutes.delete("/:id", deleteMusic);


  //creo la ruta de toggle.
module.exports = MusicRoutes; 
