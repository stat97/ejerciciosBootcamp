const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const Music = require("../models/Music.model");
const User = require("../models/User.model");
const Concert =require("../models/Concert.model");
const enumOk = require("../../utils/enumOk.js");

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
    const { concerts} = req.body; // -----> imsomnia
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
        arrayIdConcerts.map(async (concert, index) => {
          if (musicById.concert.includes(concert)) {
            //*************************************************************************** */

            //________ BORRAR DEL ARRAY DE PERSONAJES EL PEERSONAJE DENTRO DE LA Music___

            //*************************************************************************** */

            try {
              await Music.findByIdAndUpdate(id, {
                // dentro de la clavee Concert me vas a sacar el id del elemento que estoy recorriendo
                $pull: { concert: concert }, // array del modelo de musica y del mapeo
              });

              try {
                await Concert.findByIdAndUpdate(concert, { //await modelo
                  $pull: { musics: id },//hace referencia al array de concert
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
            dataUpdate: await Music.findById(id).populate("concert"),
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
const getById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const musicById = await Music.findById(id);
      if (musicById) {
        return res.status(200).json(musicById);
      } else {
        return res.status(404).json("no se ha encontrado la canción");
      }
    } catch (error) {
      return res.status(404).json(error.message);
    }
  };
  const getAll = async (req, res, next) => {
    try {
      const allMusic = await Music.find().populate("concert");
      /** el find nos devuelve un array */
      if (allMusic.length > 0) {
        return res.status(200).json(allMusic);
      } else {
        return res.status(404).json("no se han encontrado las canciones");
      }
    } catch (error) {
      return res.status(404).json({
        error: "error al buscar - lanzado en el catch",
        message: error.message,
      });
    }
  };
  
  //! ---------------------------------------------------------------------
  //? -------------------------------get by name --------------------------
  //! ---------------------------------------------------------------------
  const getByName = async (req, res, next) => {
    try {
      const {nameSong} = req.params;
  
      /// nos devuelve un array de elementos
      const musicByName = await Music.find({nameSong});
      if (musicByName.length > 0) {
        return res.status(200).json(musicByName);
      } else {
        return res.status(404).json("no se ha encontrado");
      }
    } catch (error) {
      return res.status(404).json({
        error: "error al buscar por nombre capturado en el catch",
        message: error.message,
      });
    }
  };
  
  //! ---------------------------------------------------------------------
  //? -------------------------------UPDATE -------------------------------
  //! ---------------------------------------------------------------------
  
  const update = async (req, res, next) => {
    await Music.syncIndexes();
    let catchImg = req.file?.path;
    try {
      const { id } = req.params;
      const musicById = await Music.findById(id);
      if (musicById) {
        const oldImg = musicById.image;
  
        const customBody = {
          _id: musicById._id,
          image: req.file?.path ? catchImg : oldImg,
          nameSong: req.body?.nameSong ? req.body?.nameSong : musicById.nameSong,
        };
  
        if (req.body?.gender) {
          const resultEnum = enumOk(req.body?.gender);
          customBody.gender = resultEnum.check
            ? req.body?.gender
            : characterById.gender;
        }
  
        try {
          await Music.findByIdAndUpdate(id, customBody);
          if (req.file?.path) {
            deleteImgCloudinary(oldImg);
          }
          const musicByIdUpdate = await Music.findById(id);

          // ......> me cojer el req.body y vamos a sacarle las claves para saber que elementos nos ha dicho de actualizar
          const elementUpdate = Object.keys(req.body);
  
          /** vamos a hacer un objeto vacion donde meteremos los test */
  
          let test = {};
  
          /** vamos a recorrer las claves del body y vamos a crear un objeto con los test */
  
          elementUpdate.forEach((item) => {
            if (req.body[item] === concertByIdUpdate[item]) {
              test[item] = true;
            } else {
              test[item] = false;
            }
          });
  
          if (catchImg) {
            musicByIdUpdate.image === catchImg
              ? (test = { ...test, file: true })
              : (test = { ...test, file: false });
          }
          let acc = 0;
          for (clave in test) {
            test[clave] == false && acc++;
          }
  
          if (acc > 0) {
            return res.status(404).json({
              dataTest: test,
              update: false,
            });
          } else {
            return res.status(200).json({
              dataTest: test,
              update: true,
            });
          }
        } catch (error) {}
      } else {
        return res.status(404).json("esta cancion no existe");
      }
    } catch (error) {
      return res.status(404).json(error);
    }
  };
  const deleteMusic = async (req, res, next) => {
    try {
      const { id } = req.params;
      const music = await Music.findByIdAndDelete(id);
      if (music) {
        // lo buscamos para vr si sigue existiendo o no
        const finByIdMusic = await Music.findById(id);
  
        try {
          const test = await Music.updateMany(
            { musics: id },
            { $pull: { musics: id } }
          );
          console.log(test);
  
          try {
            await User.updateMany(
              { musicsFav: id },
              { $pull: { musicsFav: id } }
            );
  
            return res.status(finByIdMusic ? 404 : 200).json({
              deleteTest: finByIdMusic ? false : true,
            });
          } catch (error) {
            return res.status(404).json({
              error: "error catch update User",
              message: error.message,
            });
          }
        } catch (error) {
          return res.status(404).json({
            error: "error catch update Movie",
            message: error.message,
          });
        }
      }
    } catch (error) {
        return res.status(404).json(error.message);
  }
};

module.exports = { registerMusic,toggleConcert,getById,getAll,getByName,update,deleteMusic }