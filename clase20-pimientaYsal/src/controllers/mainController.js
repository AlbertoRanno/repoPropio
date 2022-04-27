const mainController = {
  index: (req, res) => {
    res.status(200).render("index", { listadoDePlatos: platos });
  },
  detalleMenu: (req, res) => {
    res.status(200).render("detalleMenu", { listadoDePlatos: platos });
  },
};

module.exports = mainController;

const platos = [
  {
    nombre: "Carpaccio fresco",
    descripcion: "Entrada Carpaccio de salmón con cítricos",
    precio: 65.5,
    imagen: "/images/Carpaccio-de-salmon.jpg",
  },
  {
    nombre: "Risotto de berenjena",
    descripcion: "Risotto de berenjena y queso de cabra",
    precio: 47.0,
  },
  {
    nombre: "Mousse de arroz",
    descripcion: "Mousse de arroz con leche y aroma de azahar",
    precio: 27.5,
  },
  {
    nombre: "Espárragos blancos",
    descripcion: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
    precio: 37.5,
  },
];
