const mainController = {
  index: (req, res) => {
    res.status(200).render("index", { listadoDePlatos: [
  {
    idMenu: 1,
    nombre: "Carpaccio fresco",
    descripcion: "Entrada Carpaccio de salmón con cítricos",
    precio: 65.5,
    imagen: "images/Carpaccio-de-salmon.jpg",
  },

  {
    idMenu: 2,
    nombre: "Risotto de berenjena",
    descripcion: "Risotto de berenjena y queso de cabra",
    precio: 47.0,
    imagen: "images/Risotto-berenjena-queso-cabra.jpg",
  },
  {
    idMenu: 3,
    nombre: "Mousse de arroz",
    descripcion: "Mousse de arroz con leche y aroma de azahar",
    precio: 27.5,
    imagen: "images/Mousse-de-arroz-con-leche.jpg",
  },
  {
    idMenu: 4,
    nombre: "Espárragos blancos",
    descripcion: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
    precio: 37.5,
    imagen: "images/esparragos.jpg",
  },
] });
  },
};

module.exports = mainController;




