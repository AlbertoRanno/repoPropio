// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require ('multer');  // librería para que el usuario pueda cargar archivos. form con POST + enctype="multipart/form-data"
//enctype prepara al form para que envie información que es más que solo texto

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

router.get('/', mainController.index); 
router.get('/search', mainController.search); 

module.exports = router;
