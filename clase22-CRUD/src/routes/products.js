// ************ Require's ************
const express = require("express");
const router = express.Router();
const path = require("path");
//MULTER - librería para que el usuario pueda cargar archivos. Es un middleware
const multer = require("multer"); // RECORDAR: form con POST + enctype="multipart/form-data"
//const { path } = require("../app");
//enctype prepara al form para que envie información que es más que solo texto
const storage = multer.diskStorage({
  destination: function (req, file, cb) {    // "cb" es un callback
    let folder = path.join(__dirname, "../../public/images/uploadProducts"); //__dirname da el punto de partida
    cb(null, folder); //el primer parámetro es siempre NULL, el 2do, la carpeta que almacenará los archivos subidos
  },
  filename: function (req, file, cb) {
    //el nombre que recibirá cada archivo, lo puedo armar como quiera
    console.log(file) //para ver que me va a llegar
    let imageName = "product-" + Date.now() + path.extname(file.originalname); //objeto Date => un nro por la fecha hora (la cantidad de segundos desde 1970)
    cb(null, imageName); // Con path => la extensión del archivo original
  },
});
const uploadFile = multer({ storage }); //para poder implementarlo, se guarda en una variable la ejecución.
//notar que toma como argumento "storage", el objeto literal que guarda las configuraciones realizadas en el paso anterior
//Obs! {storage: storage} === {storage}, para casos donde la propiedad tiene el mismo nombre que la variable

// ************ Controller Require ************
const productsController = require("../controllers/productsController");

/*** GET ALL PRODUCTS ***/
router.get("/", productsController.index);

/*** CREATE ONE PRODUCT ***/
router.get("/create", productsController.create);
router.post(
  "/create",
  uploadFile.single("imagenProducto"),
  productsController.store
); /* en la ruta donde quiera procesar
archivos, tengo que pasar a Multer como middleware. Obs! sobre uploadFile, la variable que definí, se ejecuta el
 método single(),el cual toma como argumento EL VALOR DEL ATRIBUTO NAME DEL INPUT que enviará la imagen que 
 deseamos procesar, en este caso "imagenProducto*/

/*** GET ONE PRODUCT ***/
router.get("/detail/:id", productsController.detail);

/*** EDIT ONE PRODUCT ***/
router.get("/edit/:id", productsController.edit);
router.patch("/edit/:id", productsController.update);

/*** DELETE ONE PRODUCT***/
router.delete("/delete/:id", productsController.destroy);

module.exports = router;
