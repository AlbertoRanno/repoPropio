const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

//const actions = require("../data/actions");

const controller = {
  index: (req, res) => {
    let inSale = products.filter((product) => product.category == "in-sale");
    let visited = products.filter((product) => product.category == "visited");
    res.status(200).render("index", { inSale, visited, toThousand });
  },
  search: (req, res) => {
    let loQueBuscoElUsuario = req.query.keywords.toLowerCase();
    console.log(loQueBuscoElUsuario);
    let productsResults = [];
    for (let i = 0; i < products.length; i++) {
      console.log("entró al FOR");
      if (products[i].name.toLowerCase().includes(loQueBuscoElUsuario)) {
        productsResults.push(products[i]);
      }
    }
    res.status(200).render("results", {
      productsResults,
      toThousand,
    });
  },
};

module.exports = controller;
