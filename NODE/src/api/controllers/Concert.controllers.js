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
    const { Musics } = req.body; // -----> id De Los Music enviaremos esto por el req.body "12412242253,12535222232,12523266346"
    /** Buscamos los Music por id para saber si existe */
    const concertById = await Concert.findById(id); //busco en la BD si esta incluido o no

    /** vamos a hacer un condicional para ver si existe hacer la update sino mandamos un 404 */
    if (concertById) {
      /** cageemos el string que traemos del body y lo convertimos en un array
       * y con el .split lo separa con comas.
       */
      const arrayIdMusic = musics.split(",");

      Promise.all(
        //con el promise.all le estamos diciendo que me resuelva todas las promesas que tenga dentro y cuando las resulvas, continuas.
        arrayIdMusic.map(async (Music, index) => {
          //vamos a recorrer los id de los Music
          if (ConcertById.Music.includes(Music)) {
            //tu incluyes el Music que estoy recorriendo?

            //________ EN CASO DE QUE LO INCLUYA HAY QUE BORRAR DEL ARRAY DE Music EL Music DENTRO DEL LIBRO ___

            try {
              //hacemo sun try cath porque hay una asincronia de actualizacion
              await Concert.findByIdAndUpdate(id, {
                //apuntamos a Music y lo actualizamos (con update) pasando la id para buscarla
                // dentro de la clavee characters me vas a sacar el id del elemento que estoy recorriendo
                $pull: { Musics: Music }, //con pull le estoy diciendo que me tiene que sacar del array Music el id del que esto recorriendo
              });

              try {
                //hacemos otro try cath porque ahora hay que actualizar los Music ya que si los Music entan en los Music los Music pertenecen a los Music
                await Music.findByIdAndUpdate(Music, {
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
                $push: { Musics: Music },
              });
              try {
                await Music.findByIdAndUpdate(Music, {
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
            dataUpdate: await Music.findById(id).populate("Music"), //esa respuesta me la vas a mandar con el Libro actualizado para comprobar que hemos metido los Music.
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

module.exports = { registerConcert, toggleMusic }; //lo exportamos



