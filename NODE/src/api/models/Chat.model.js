
const mongoose = require("mongoose");

//! ----------nos traemos de mongoose la parte de los esquemas de datos

const Schema = mongoose.Schema;

//! --------- creamos los esquemas de datos

// Definir el modelo de datos:
// ------------> Le damos a cada clave del objeto el Type (tipo de dato)
// ------------> definimos otras propiedades que limitan la informacion que se puede incluir en esa clave
// ------------> que sea requerido, una longitud maxima y minima, etc etc

const ChatSchema = new Schema(
  {
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],
    userOne: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    userTwo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

//! -------- con la definicion de datos y su esquema vamos a crear el modelo de datos

const Chat = mongoose.model("Chat", ChatSchema);

//! -------- exportar el modelo para que lo utilicen los controladores

module.exports = Chat;