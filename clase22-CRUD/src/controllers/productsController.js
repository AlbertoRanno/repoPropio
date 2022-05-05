const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  // Root - Show all products
  index: (req, res) => {
    res.status(200).render("products", { products: products });
  },

  // Detail - Detail from one product
  detail: (req, res) => {
    let elDetallado = products.filter((product) => product.id == req.params.id);
    console.log(elDetallado);

    res.status(200).render("detail", { elDetallado: elDetallado[0] });
  },

  // Create - Form to create
  create: (req, res) => {
    res.status(200).render("product-create-form", { products: products });
  },

  // Create -  Method to store
  store: (req, res) => {
    let product = {
      name: req.body.name,
      price: req.body.price,
      discount: req.body.discount,
      category: req.body.category,
      description: req.body.description,
    };
    //res.send(product) //Aun Falta Guardar la información, pero guardada o no, lo redirijo a la lista
    res.redirect("products");
  },

  // Update - Form to edit
  edit: (req, res) => {
    let elEditado = products.filter((product) => product.id == req.params.id);
    console.log(elEditado);
    res.status(200).render("product-edit-form", { elEditado: elEditado[0] });
  },
  // Update - Method to update
  update: (req, res) => {
    // Do the magic
  },

  // Delete - Delete one product from DB
  destroy: (req, res) => {
    let idProduct = req.params.id;
    filteredProducts = products.filter((product) => product.id !== idProduct);
    res.send(filteredProducts);
  },
};

module.exports = controller;
