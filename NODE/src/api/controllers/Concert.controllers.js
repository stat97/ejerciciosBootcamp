const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const Concert = require("../models/Concert.model");

const registerConcert = async (req, res, next) => {
  let catchImg = req.file?.path;
  try {
    await Concert.syncIndexes();
//*registrar una nueva sala de concierto virtual en la base de datos y gestionar la imagen asociada a esa canción en Cloudinary
    const ConcertExist = await Concert.findOne({ name: req.body.name });
    if (!ConcertExist) {
      const newConcert = new Concert({ ...req.body, image: catchImg });

      try {
        const ConcertSave = await newConcert.save();

        if (ConcertSave) {
          return res.status(200).json({
            Concert: ConcertSave
          });
        } else {
          return res.status(404).json("Concert not saved");
        }
      } catch (error) {
        return res.status(404).json(error.message);
      }
    } else {
      deleteImgCloudinary(catchImg);
      return res.status(409).json("this Concert already exist");
    }
  } catch (error) {
    deleteImgCloudinary(catchImg);
    return next(error);
  }
};

module.exports = { registerConcert } 