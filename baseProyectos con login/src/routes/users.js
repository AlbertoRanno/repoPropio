const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController.js");
const auth = require("../middlewares/auth");


router.get("/login", usersController.login);

router.post("/login", usersController.processLogin );

router.get("/portal", auth.verificacion, usersController.portal);

module.exports = router;
