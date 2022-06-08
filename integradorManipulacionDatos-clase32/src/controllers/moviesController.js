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
  }, //Aqui debemos modificar y completar lo necesario para trabajar con el CRUD
  add: function (req, res) {
    res.render("moviesAdd");
  },
  create: function (req, res) {
    db.Peliculas.create({
      title: req.body.title,
      length: req.body.length,
      rating: req.body.rating,
      awards: req.body.awards,
      release_date: req.body.release_date,
    });

    res.redirect("/movies");
  },
  edit: function (req, res) {
    db.Peliculas.findByPk(req.params.id) // para saber que película edito recupero su id de la URL
      .then(function (Movie) {
        res.render("moviesEdit", { Movie: Movie });
      });
  },
  update: function (req, res) {
    db.Peliculas.update(
      // dado un modelo de la base de datos
      {
        // le digo Qué quiero actualizar
        title: req.body.title,
        length: req.body.length,
        rating: req.body.rating,
        awards: req.body.awards,
        release_date: req.body.release_date, //si no le enviara un 2do objeto literal indicando DONDE hace eso...pisaría tooda la  base de datos
      },
      {
        where: {
          id: req.params.id, //en Qué fila lo quiero actualizar
        },
      }
    );
    res.redirect("/movies/edit/" + req.params.id);
  },
  delete: function (req, res) {
    db.Peliculas.findByPk(req.params.id) // para saber que película elimino recupero su id de la URL
      .then(function (Movie) {
        res.render("moviesDelete", { Movie: Movie });
      });
  },
  destroy: function (req, res) {
    db.Peliculas.destroy({
      where: {
        id: req.params.id, //detallo Qué filas quiero borrar
        // si hubiese habido relaciones, 1ro borrar la relacion, luego la fila
      },
    });
    res.redirect("/movies");
  },
};

module.exports = moviesController;
