const res = require("express/lib/response");
let db = require("../database/models/index");

let moviesController = {
  list: function (req, res) {
    db.Peliculas.findAll().then(function (movies) {
      res.render("moviesList", { movies: movies });
    });
  },
  detail: function (req, res) {
    db.Peliculas.findByPk(req.params.id).then(function (movie) {
      console.log(movie);
      if (movie.length === null) {
        movie.length = "-";
      }
      res.render("moviesDetail", { movie: movie });
    });
  },
  new: function (req, res) {
    db.Peliculas.findAll({
      //where: {genre_id: 3},
      order: [["release_date", "DESC"]],
      limit: 5,
    }).then(function (movies) {
      res.render("newestMovies", { movies: movies });
    });
  },
  recomended: function (req, res) {
    db.Peliculas.findAll({
      where: { rating: { [db.Sequelize.Op.gt]: 8 } },
      order: [["rating", "DESC"]],
      limit: 5,
    }).then(function (movies) {
      res.render("recommendedMovies", { movies: movies });
    });
  },
};

module.exports = moviesController;
