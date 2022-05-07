const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  index: (req, res) => {
    let inSale = products.filter((product) => product.category == "in-sale");
    let visited = products.filter((product) => product.category == "visited");
    res.status(200).render("index", { inSale, visited, toThousand });
  },
  search: (req, res) => {
    let loQueBuscoElUsuario = req.query.keywords;
    let productsResults = [];
    for (let i = 0; i < products.length; i++) {
      if (products[i].name.includes(loQueBuscoElUsuario)) {
        productsResults.push(products[i]);
      } 
    }
    res.status(200).render("results", {
      productsResults: productsResults[0],
      toThousand,
    });
  },
};

module.exports = controller;
