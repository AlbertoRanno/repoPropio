// ************ Require's ************
const express = require("express");
const router = express.Router();
//MULTER - librería para que el usuario pueda cargar archivos. Es un middleware
const multer = require("multer"); // RECORDAR: form con POST + enctype="multipart/form-data"
//enctype prepara al form para que envie información que es más que solo texto
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/avatars"); //la carpeta que almacenará los archivos subidos
  },
  filename: function (req, file, cb) {
    cb(null, "${Date.now()}_img_${path.extname(file.originalname)}"); //el nombre que recibirá cada archivo.
  }, //Con path se obtiene la extensión del archivo original
});
const uploadFile = multer ({storage}) //para poder implementarlo, se guarda en una variable la ejecución.
//notar que toma como argumento "storage", el objeto literal que guarda las configuraciones realizadas en el paso anterior

// ************ Controller Require ************
const productsController = require("../controllers/productsController");

/*** GET ALL PRODUCTS ***/
router.get("/", productsController.index);

/*** CREATE ONE PRODUCT ***/
router.get("/create", productsController.create);
router.post("/create", uploadFile.single("avatar"), productsController.create);/* en la ruta donde quiera procesar
archivos, tengo que pasar a Multer como middleware. Obs! sobre uploadFile, la variable que definí, se ejecuta el método single(),
el cual toma como argumento EL NOMBRE DEL INPUT que enviará la imagen que deseamos procesar, en este caso "avatar*/
router.post("/create", productsController.store);


/*** GET ONE PRODUCT ***/
router.get("/detail/:id", productsController.detail);

/*** EDIT ONE PRODUCT ***/
router.get("/edit/:id", productsController.edit);
router.patch("/edit/:id", productsController.update);

/*** DELETE ONE PRODUCT***/
router.delete("/delete/:id", productsController.destroy);

module.exports = router;
