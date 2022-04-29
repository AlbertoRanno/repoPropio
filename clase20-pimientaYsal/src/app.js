const express = require("express");
const app = express();
app.use(express.static("public"));

//routes imports
const rutasMain = require("./routes/main.js");
const rutasPlatos = require("./routes/platos.js");

//índice
app.use("/", rutasMain);
app.use("/plato", rutasPlatos);


//template engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});


