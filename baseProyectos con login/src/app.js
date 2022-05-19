const express = require("express");
const session = require("express-session");
const app = express();
app.use(express.static("public"));

//routes imports
const rutasMain = require("./routes/main.js");
const rutasProducts = require("./routes/products.js");
const rutasUsers = require("./routes/users.js");

app.use(express.urlencoded({ extended: false })); // Para capturar datos desde un formulario como un obj literal (req.body)
app.use(session({ secret: "Nuestro mensaje secreto" })); // Nunca asi, un string cifrado (hay softwares de encriptación - en google)
app.use(express.json()); // Para que en el body puedan viajar datos en formato JSON

app.use("/", rutasMain);
app.use("/products", rutasProducts);
app.use("/users", rutasUsers);

//template engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
