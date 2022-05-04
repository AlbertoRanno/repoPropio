const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  index: (req, res) => {
    res.status(200).render("index");
  },
  search: (req, res) => {
    let loQueBuscoElUsuario = req.query.keywords;
    let usersResults = [];
    for (let i = 0; i < users.length; i++) {
      if (products[i].name.includes(loQueBuscoElUsuario)) {
        usersResults.push(products[i]);
      }
    }
    res.status(200).render("results", { usersResults: usersResults });
  },
};

module.exports = controller;


