const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const Concert = require("../models/Concert.model");
const enumOk = require("../../utils/enumOk.js");
const Music = require("../models/Music.model");
const User = require("../models/User.model");

const registerConcert = async (req, res, next) => {
  let catchImg = req.file?.path;
  try {
    await Concert.syncIndexes();

    const ConcertExist = await Concert.findOne({ virtualStageName: req.body.virtualStageName });
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

//* aqui metemos los Music en el array del modelo de Music
const toggleMusic = async (req, res, next) => {
  try {
    /** este es el id del Music que queremos actualizar */
    const { id } = req.params;
    const { musics } = req.body; // -----> id De Los Music enviaremos esto por el req.body "12412242253,12535222232,12523266346"
    /** Buscamos los Music por id para saber si existe */
    const concertById = await Concert.findById(id); //busco en la BD si esta incluido o no

    /** vamos a hacer un condicional para ver si existe hacer la update sino mandamos un 404 */
    if (concertById) {
      /** cageemos el string que traemos del body y lo convertimos en un array
       * y con el .split lo separa con comas.
       */
      const arrayIdMusics = musics.split(",");

      Promise.all(
        //con el promise.all le estamos diciendo que me resuelva todas las promesas que tenga dentro y cuando las resulvas, continuas.
        arrayIdMusics.map(async (music, index) => {
          //vamos a recorrer los id de los Music
          if (concertById.music.includes(music)) {
            //tu incluyes el Music que estoy recorriendo?

            //________ EN CASO DE QUE LO INCLUYA HAY QUE BORRAR DEL ARRAY DE Music EL Music DENTRO DEL LIBRO ___

            try {
              //hacemo sun try cath porque hay una asincronia de actualizacion
              await Concert.findByIdAndUpdate(id, {
                //apuntamos a Music y lo actualizamos (con update) pasando la id para buscarla
                // dentro de la clavee characters me vas a sacar el id del elemento que estoy recorriendo
                $pull: { music: music }, //con pull le estoy diciendo que me tiene que sacar del array Music el id del que esto recorriendo
              });

              try {
                //hacemos otro try cath porque ahora hay que actualizar los Music ya que si los Music entan en los Music los Music pertenecen a los Music
                await Music.findByIdAndUpdate(music, {
                  //apuntamos a Music y le digo que m ebusque por id el Music
                  $pull: { music: id }, //con el pull le digo que me saque el id de Music
                });
              } catch (error) {
                res.status(404).json({
                  error: "error update character", //mando un error con texto personalizado.
                  message: error.message, //se manda el mensaje del error (mensaje especifico de ese error), esto es si quiero saber mas informacion acerca del error.
                }) && next(error); //todo lo que es toggle me interesa mandarlo por next
              }
            } catch (error) {
              res.status(404).json({
                error: "error update movie",
                message: error.message,
              }) && next(error);
            } //es importante que los try cath esten anidados ya que le estoy diciendo que cuando haga el primero haga el segundo.
          } else {
            //el else lo estamos utilizando para ver cuando mi Music no está en la array y si no esta lo meto.

            //________ METER EL Music EN EL ARRAY DE Music DEL LIBRO_____________

            /** si no lo incluye lo tenemos que meter con el $push */

            try {
              //ESTO ES EXACTAMENTE COMO LO DE ARRIBA, SIMPLEMENTE CAMBIAMOS EL PULL POR EL PUSH.
              await Concert.findByIdAndUpdate(id, {
                $push: { musics:music },
              });
              try {
                await Music.findByIdAndUpdate(music, {
                  $push: {concerts: id },
                });
              } catch (error) {
                res.status(404).json({
                  error: "error update character",
                  message: error.message,
                }) && next(error);
              }
            } catch (error) {
              res.status(404).json({
                error: "error update movie",
                message: error.message,
              }) && next(error);
            }
          }
        })
      )
        .catch((error) => res.status(404).json(error.message)) //el .cath es por si hay algun error de sincronia y falla algun cath de arriba lo capture aquí el error.
        .then(async () => {
          //la respuesta del promise se lanza aqui con un .then y le estoy diciendo que cuando haya terminado esas asincronias (pelis y Music) me retorne una respuesta.
          return res.status(200).json({
            //le estoy diciendo que cuando lo haya solucionado me de una respuesta 200.
            dataUpdate: await Concert.findById(id).populate("music"), //esa respuesta me la vas a mandar con el Libro actualizado para comprobar que hemos metido los Music.
          }); //el populate es para que esos id de Music se conviertan en informacion del modrlo de Music.
        }); //ESTO DEL .THEN ES SOLO CUANDO SE HA SOLUCIONADO TODO CORRECTAMENTE SI NO, SE LANZARAN LOS DIRENTES CATH.
    } else {
      return res.status(404).json("esta pelicula no existe");
    }
  } catch (error) {
    //cath general
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
    const concertById = await Concert.findById(id);
    if (concertById) {
      return res.status(200).json(concertById);
    } else {
      return res.status(404).json("no se ha encontrado el concert");
    }
  } catch (error) {
    return res.status(404).json(error.message);
  }
};
const getAll = async (req, res, next) => {
  try {
    const allConcert = await Concert.find().populate("music");
    /** el find nos devuelve un array */
    if (allConcert.length > 0) {
      return res.status(200).json(allConcert);
    } else {
      return res.status(404).json("no se han encontrado concerts");
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
    const {virtualStageName} = req.params;

    /// nos devuelve un array de elementos
    const concertByName = await Concert.find({virtualStageName});
    if (concertByName.length > 0) {
      return res.status(200).json(concertByName);
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
  await Concert.syncIndexes();
  let catchImg = req.file?.path;
  try {
    const { id } = req.params;
    const concertById = await Concert.findById(id);
    if (concertById) {
      const oldImg = concertById.image;

      const customBody = {
        _id: concertById._id,
        image: req.file?.path ? catchImg : oldImg,
        virtualStageName: req.body?.virtualStageName ? req.body?.virtualStageName : characterById.virtualStageName,
      };

      if (req.body?.gender) {
        const resultEnum = enumOk(req.body?.gender);
        customBody.gender = resultEnum.check
          ? req.body?.gender
          : characterById.gender;
      }

      try {
        await Concert.findByIdAndUpdate(id, customBody);
        if (req.file?.path) {
          deleteImgCloudinary(oldImg);
        }

        //** ------------------------------------------------------------------- */
        //** VAMOS A TESTEAR EN TIEMPO REAL QUE ESTO SE HAYA HECHO CORRECTAMENTE */
        //** ------------------------------------------------------------------- */

        // ......> VAMOS A BUSCAR EL ELEMENTO ACTUALIZADO POR ID

        const concertByIdUpdate = await Concert.findById(id);

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
          concertByIdUpdate.image === catchImg
            ? (test = { ...test, file: true })
            : (test = { ...test, file: false });
        }

        /** vamos a ver que no haya ningun false. Si hay un false lanzamos un 404,
         * si no hay ningun false entonces lanzamos un 200 porque todo esta correcte
         */

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
      return res.status(404).json("este concert no existe");
    }
  } catch (error) {
    return res.status(404).json(error);
  }
};

const deleteConcert = async (req, res, next) => {
  try {
    const { id } = req.params;
    const concert = await Concert.findByIdAndDelete(id);
    if (concert) {
      // lo buscamos para vr si sigue existiendo o no
      const finByIdConcert = await Concert.findById(id);

      try {
        const test = await Music.updateMany(
          { concerts: id },
          { $pull: { concerts: id } }
        );
        console.log(test);

        try {
          await User.updateMany(
            { concertsFav: id },
            { $pull: { concertsFav: id } }
          );

          return res.status(finByIdConcert ? 404 : 200).json({
            deleteTest: finByIdConcert ? false : true,
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
module.exports = { registerConcert, toggleMusic,getById,getAll,update,getByName,deleteConcert}; //lo exportamos



