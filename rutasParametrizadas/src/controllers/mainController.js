const mainController = {
  alfa: (req, res) => {
    res.send("Elegiste el producto " + req.params.idProducto);
  },
  beta: (req, res) => {
    if (req.params.idComentario == undefined) {
      res.send(
        "Bienvenidos a los comentarios del producto" + req.params.idProducto
      );
    } else {
      res.send(
        "Bienvenidos a los comentarios del producto" +
          req.params.idProducto +
          " y estas enfocado en el comentario " +
          req.params.idComentario
      );
    }
  },
  gama: (req, res) => {
    res.status(200).render("index");
  },
};

module.exports = mainController;
