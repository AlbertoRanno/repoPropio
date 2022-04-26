const express = require("express");
const res = require("express/lib/response");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views/home.html"));
});

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
