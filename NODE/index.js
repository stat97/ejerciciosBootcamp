const express = require("express");
const dotenv = require("dotenv");
const { connect } = require("./src/utils/db");
const UserRoutes = require("./src/api/routes/User.routes")

// creamos el servidor web
const app = express();
const cors = require("cors");


// vamos a configurar dotenv para poder utilizar las variables d entorno del .env
dotenv.config();

//! conectamos con la base de datos
connect();
const {configCloudinary} = require("./src/middleware/files.middleware")
configCloudinary();
const PORT = process.env.PORT;

app.use(cors())
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: false }));
app.use("/api/v1/users/", UserRoutes);

app.use("*", (req, res, next) => {
    const error = new Error("Route not found");
    error.status = 404;
    return next(error);
  });
  
  //! ------------------> cuando el servidor crachea metemos un 500 ----------
  app.use((error, req, res) => {
    return res
      .status(error.status || 500)
      .json(error.message || "unexpected error");
  });
  
  //! ------------------ ESCUCHAMOS EN EL PUERTO EL SERVIDOR WEB-----
  
  // esto de aqui  nos revela con que tecnologia esta hecho nuestro back
  app.disable("x-powered-by");
  app.listen(PORT,()=>console.log(`servidor escuchando en el puerto http://localhost:${PORT}`))