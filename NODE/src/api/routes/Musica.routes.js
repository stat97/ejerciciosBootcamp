const { createMusica } = require("../controllers/Musica.controllers");

const MusicaRoutes = require("express").Router();

MusicaRoutes.post("/", createMusica);

module.exports = MusicaRoutes;