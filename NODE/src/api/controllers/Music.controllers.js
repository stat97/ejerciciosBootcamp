const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const Music = require("../models/Music.model");
const User = require("../models/User.model");

const registerMusic = async (req, res, next) => {
    console.log(req.body)
  let catchImg = req.file?.path;
  try {
    await Music.syncIndexes();

    const MusicExist = await Music.findOne({ nameSong: req.body.nameSong });
    if (!MusicExist) {
      const newMusic = new Music({ ...req.body, image: catchImg });
      

      try {
        const Musicave = await newMusic.save();

        if (Musicave) {
          return res.status(200).json({
            Music: Musicave
          });
        } else {
          return res.status(404).json("Music not saved");
        }
      } catch (error) {
        return res.status(404).json(error.message);
      }
    } else {
      deleteImgCloudinary(catchImg);
      
      return res.status(409).json("this Music already exist");
    }
  } catch (error) {
    deleteImgCloudinary(catchImg);
    return next(error);
  }
};

/// aqui metemos los personajes en el array del modelo de Music
const toggleConcert = async (req, res, next) => {
  try {
    /** estee id es el id de la Musice que queremos actualizar */
    const { id } = req.params;
    const { concerts} = req.body; // -----> idDeLosConcert enviaremos esto por el req.body "12412242253,12535222232,12523266346"
    /** Buscamos la pelicula por id para saber si existe */
    const musicById = await Music.findById(id);

    /** vamos a hacer un condicional para si existee hacer la update sino mandamos un 404 */
    if (musicById) {
      /** cageemos el string que traemos del body y lo convertimos en un array
       * separando las posiciones donde en el string habia una coma
       * se hace mediante el metodo del split
       */
      const arrayIdConcerts = concerts.split(",");

      /** recorremos este array que hemos creado y vemos si tenemos quee:
       * 1) ----> sacar eel Concert si ya lo tenemos en el back
       * 2) ----> meterlo en caso de que no lo tengamos metido en el back
       */
      Promise.all(
        arrayIdConcerts.map(async (Concert, index) => {
          if (musicById.concerts.includes(Concert)) {
            //*************************************************************************** */

            //________ BORRAR DEL ARRAY DE PERSONAJES EL PEERSONAJE DENTRO DE LA Music___

            //*************************************************************************** */

            try {
              await Music.findByIdAndUpdate(id, {
                // dentro de la clavee Concert me vas a sacar el id del elemento que estoy recorriendo
                $pull: { concerts: concert },
              });

              try {
                await Concert.findByIdAndUpdate(concert, {
                  $pull: { musics: id },
                });
              } catch (error) {
                res.status(404).json({
                  error: "error update Concert",
                  message: error.message,
                }) && next(error);
              }
            } catch (error) {
              res.status(404).json({
                error: "error update Music",
                message: error.message,
              }) && next(error);
            }
          } else {
            //*************************************************************************** */
            //________ METER EL PERSONAJE EN EL ARRAY DE PERSONAJES DE LA Music_____________
            //*************************************************************************** */
            /** si no lo incluye lo tenemos que meter -------> $push */

            try {
              await Music.findByIdAndUpdate(id, {
                $push: { concerts: concert },
              });
              try {
                await Concert.findByIdAndUpdate(concert, {
                  $push: { musics: id },
                });
              } catch (error) {
                res.status(404).json({
                  error: "error update Concert",
                  message: error.message,
                }) && next(error);
              }
            } catch (error) {
              res.status(404).json({
                error: "error update Music",
                message: error.message,
              }) && next(error);
            }
          }
        })
      )
        .catch((error) => res.status(404).json(error.message))
        .then(async () => {
          return res.status(200).json({
            dataUpdate: await Music.findById(id).populate("Concert"),
          });
        });
    } else {
      return res.status(404).json("esta pelicula no existe");
    }
  } catch (error) {
    return (
      res.status(404).json({
        error: "error catch",
        message: error.message,
      }) && next(error)
    );
  }
};


module.exports = { registerMusic,toggleConcert }