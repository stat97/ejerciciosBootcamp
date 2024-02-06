const Musica = require("../models/Musica.model");

/**+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * ++++++++++++++++++++++++++-------C R U D--------+++++++++++++++++++++++++++++++++++
 * +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 */
//! ---------------------------------------------------------------------
//? -------------------------------POST create --------------------------
//! ---------------------------------------------------------------------

const createMusica = async (req, res, next) => {
  try {
    await Musica.syncIndexes();

    /** hacemos una instancia del modelo  */
    const customBody = {
      name: req.body?.name,
      year: req.body?.year,
    };
    const newMusica = new Musica(customBody);
    const savedMusica = await newMusica.save();

    // test en el runtime
    return res
      .status(savedMusica ? 200 : 404)
      .json(savedMusica ? savedMusica : "error al crear musica");
  } catch (error) {
    return res.status(404).json({
      error: "error catch create musica",
      message: error.message,
    });
  }
};

module.exports = { createMusica };