const express = require("express");
const res = require("express/lib/response");
const path = require("path");

const app = express();

app.use(express.static("public")); // middleware necesario para ver la imagen que levanta el html (mas adelante veremos que es un  middleware.)

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views/home.html"));
});

/*app.get("/holaMuchachos", (req, res) => {
  res.status(200).send("Hola muchachos");
});

app.get("/index", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views/pagina.html"));
});

app.get("/saludo", (req, res) => {
  res.status(200).send("<h1> Hola Mundo <h1>");
});

app.get("/saludohtml", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/image", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "public/images/imagen.jpg"));
});

app.get("/estudiantes", (req, res) => {
  res.status(200).send("Estudiantes y blablabla..");
});*/

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
