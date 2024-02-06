const mongoose = require("mongoose");

const MusicaSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    year: { type: Number, required: true },
    musicalgenre : {type:String, required :true}
    
    //owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  },
  {
    timestamps: true,
  }
);

const Musica = mongoose.model("Musica", MusicaSchema);

module.exports = Musica;