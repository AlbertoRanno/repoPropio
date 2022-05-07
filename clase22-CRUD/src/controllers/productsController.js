const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  // Root - Show all products
  index: (req, res) => {
    res.status(200).render("products", { products, toThousand });
  },

  // Detail - Detail from one product
  detail: (req, res) => {
    let elDetallado = products.filter((product) => product.id == req.params.id);
    console.log(elDetallado);

    res
      .status(200)
      .render("detail", { elDetallado: elDetallado[0], toThousand });
  },

  // Create - Form to create
  create: (req, res) => {
    res.status(200).render("product-create-form", { products: products });
  },

  // Create -  Method to store
  store: (req, res) => {
   // console.log(req.file);
    if (req.file) {
      let product = req.body;
      product.image = req.file.filename;

      // gracias a multer, tengo file, y devuelve un objeto con la información del archivo
      //res.send(product); //Aun Falta Guardar la información, pero guardada o no, lo redirijo a otra vista
      //res.send("Archivo subido correctamente")
      //res.redirect("index");
      /*  {
  name: req.file.name, // BODY O AHORA ES FILE O ES LO MISMO?
  price: req.file.price,
  discount: req.file.discount,
  category: req.file.category,
  description: req.file.description,
}*/
    } else {
      res.status(200).render("product-create-form", { products: products });
    }
  },

  // Update - Form to edit
  edit: (req, res) => {
    let productToEdit = products.filter(
      (product) => product.id == req.params.id
    );
    console.log(productToEdit);
    res
      .status(200)
      .render("product-edit-form", { productToEdit: productToEdit[0] });
  },
  // Update - Method to update
  update: (req, res) => {
    let productToEdit = products.filter(
      (product) => product.id == req.params.id
    );
    console.log(productToEdit);
    res.status(200).send(productToEdit);
    //res.redirect("index");
  },

  // Delete - Delete one product from DB
  destroy: (req, res) => {
    let idProduct = req.params.id;
    filteredProducts = products.filter((product) => product.id !== idProduct);
    //res.send(filteredProducts);
    res.send("me eliminaste");
    //res.redirect("index");
  },
};

module.exports = controller;
