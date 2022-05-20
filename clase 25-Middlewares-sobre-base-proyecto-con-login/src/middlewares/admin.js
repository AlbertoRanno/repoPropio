let admins = ["Ada", "Greta", "Vin", "Tim"];

function admin(req, res, next) {
  if (admins.includes(req.params.user)) {
    console.log(req.params.user);
    res.send("Hola Admin: " + req.params.user);
  } else {
    res.send("no tienes los privilegios para ingresar");
  }
  next();
}

module.exports = admin;
