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
    timeDuration: {
      type: Number,
      required: true,
    },
    //* Genero musical
    genreMusic: {
      type: String,
      required: true,
      trim: true,
    },
    
    image: {
        type: String,
        required: false,
      },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    concert: [{ type: mongoose.Schema.Types.ObjectId, ref: "Concert" }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],
   
  },
  {
    timestamps: true,
  }
)

const Music = mongoose.model("Music", MusicSchema);

module.exports = Music;
