const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController.js");

router.get("/:idProducto", mainController.alfa);
router.get("/:idProducto/comentarios/:idComentario?", mainController.beta);
router.get("/:idProducto/home", mainController.gama);

module.exports = router;
