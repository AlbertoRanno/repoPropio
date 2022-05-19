const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");

const actions = {
  toThousand: (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."),
  get: () => {
      JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
  },
  create: (data) => {
    fs.writeFileSync(productsFilePath, data);
  },
  update: (data) => {
    const previousData = fs.readFileSync(productsFilePath);
    fs.writeFileSync(productsFilePath, previousData + data);
  },
  delete: () => {
    const previousData = fs.readFileSync(productsFilePath);
    fs.writeFileSync(productsFilePath, previousData);
  },
};

module.exports = actions;
