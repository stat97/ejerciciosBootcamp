const { upload } = require("../../middleware/files.middleware");
const { registerConcert,toggleMusic,getById,getAll,getByName,update,deleteConcert} = require("../controllers/Concert.controllers");
const express = require("express");
const ConcertRoutes = express.Router();

ConcertRoutes.post("/register", upload.single("image"), registerConcert);
ConcertRoutes.patch("/add/:id",toggleMusic); 
ConcertRoutes.get("/:id", getById);
ConcertRoutes.get("/", getAll);
ConcertRoutes.get("/byName/:name", getByName);
ConcertRoutes.patch("/:id", upload.single("image"), update);
ConcertRoutes.delete("/:id", deleteConcert);

module.exports = ConcertRoutes; 

