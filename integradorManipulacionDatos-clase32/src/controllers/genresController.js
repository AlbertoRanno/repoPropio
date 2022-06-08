const res = require("express/lib/response");
let db = require("../database/models/index");

let moviesController = {
  list: function (req, res) {
    db.Generos.findAll().then(function (genres) {
      res.render("genresList", { genres: genres });
    });
  },
  detail: function (req, res) {
    db.Generos.findByPk(req.params.id).then(function (genre) {
      console.log(genre);
      res.render("genresDetail", { genre: genre });
    });
  }
};

module.exports = moviesController;
