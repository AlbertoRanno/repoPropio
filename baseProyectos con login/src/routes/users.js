const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController.js");
const auth = require("../middlewares/auth");


router.get("/login", usersController.login);

router.post("/login", usersController.processLogin, auth.verificacion );

router.get("/portal", usersController.portal);

module.exports = router;
