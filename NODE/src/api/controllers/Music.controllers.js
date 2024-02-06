const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const Music = require("../models/Music.model");

const registerMusic = async (req, res, next) => {
  let catchImg = req.file?.path;
  try {
    await Music.syncIndexes();

    const MusicExist = await Music.findOne({ name: req.body.name });
    if (!MusicExist) {
      const newMusic = new Music({ ...req.body, image: catchImg });

      try {
        const MusicSave = await newMusic.save();

        if (MusicSave) {
          return res.status(200).json({
            Music: MusicSave
          });
        } else {
          return res.status(404).json("Song not saved");
        }
      } catch (error) {
        return res.status(404).json(error.message);
      }
    } else {
      deleteImgCloudinary(catchImg);
      return res.status(409).json("This song already exists");
    }
  } catch (error) {
    deleteImgCloudinary(catchImg);
    return next(error);
  }
};

module.exports = { registerMusic } 