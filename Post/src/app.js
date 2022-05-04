const express = require("express");
const app = express();
app.use(express.static("public"));

//routes imports
const rutasMain = require("./routes/main.js");
const rutasProducts = require("./routes/products.js");
const rutasUsers = require("./routes/users.js");

//para capturar lo que venga en un formulario, en forma de un objeto literal, y poder convertirlo a json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", rutasMain);
app.use("/products", rutasProducts);
app.use("/users", rutasUsers);

//template engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");



app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
