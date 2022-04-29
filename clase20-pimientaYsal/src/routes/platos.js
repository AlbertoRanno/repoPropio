const express = require("express");
const router = express.Router();

const platosController = require("../controllers/platosController.js");

router.get("/:idPlato", platosController.filtrarPlatos);


module.exports = router;
