const mongoose = require('mongoose')

const ConcertSchema = new mongoose.Schema(
  {
    virtualStageName: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    stageRoomNumber:{
      type:Number,
      required:true,
      unique:true,
    },
    totalDurationTime: {
      type: Number,
      required: false,
      trim: true
    },
    totalAmountofSongs: {
      type: Number,
      required: false,
      trim: true
    },
    startingTime: {
      type: Number,
      required: false,
      trim: true
    },
    endingTime: {
      type: Number,
      required: false,
      trim: true
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],
    music: [{ type: mongoose.Schema.Types.ObjectId, ref: "Music" }],
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const Concert = mongoose.model("Concert", ConcertSchema);

module.exports = Concert;
