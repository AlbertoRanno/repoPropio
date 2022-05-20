const auth = {
  verificacion: (req, res, next) => {
    if (req.session.userinformation) {
      next();
    } else {
      res.send("usuario no autenticado");
    }
  },
};

module.exports = auth;
