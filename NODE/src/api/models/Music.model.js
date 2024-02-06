const mongoose = require('mongoose');
const MusicSchema = new mongoose.Schema(
  {
    //*Nombre de la cancion
    nameSong: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    //*Nombre de artista/s
    nameArtist: {
        type: String,
        required: true,
        trim: true,
        unique: true,
      },
      //*Duracion de la cancion
    durationSong: {
      type: Number,
      required: true,
    },
    //* Genero musical
    genreSong: {
      type: String,
      required: true,
      trim: true,
    },
    
    Concert: [{ type: mongoose.Schema.Types.ObjectId, ref: "Concert" }],
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Music = mongoose.model("Music", MusicSchema);

module.exports = Music;
