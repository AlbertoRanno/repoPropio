const express = require("express");
const rutasMain = require("./routes/main.js");

const app = express();

app.use(express.static("public"));

app.use("/", rutasMain);

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
