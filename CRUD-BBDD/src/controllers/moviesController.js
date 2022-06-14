const res = require("express/lib/response");
let db = require("../database/models/index");

/*const sequelize = db.sequelize;
const { Op } = require("sequelize");


//Aqui tienen una forma de llamar a cada uno de los modelos
// const {Movies,Genres,Actor} = require('../database/models');

//Aquí tienen otra forma de llamar a los modelos creados
const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;*/

let moviesController = {
  list: function (req, res) {
    db.Peliculas.findAll({
      //necesito aclararle a findAll, que quiero que traiga la relación // hace JOINS por detrás
      include: [
        // el atributo include recibe un array, porque pueden ser muchas relaciones
        {
          association: "generos", // el alias que le puse a la asociación
        },
        {
          association: "actores", // el alias que le puse a la asociación
        },
      ],
    }).then(function (movies) {
      res.render("moviesList", { movies: movies });
    });
  },
  detail: function (req, res) {
    db.Peliculas.findByPk(req.params.id, {
      //necesito aclararle a findAll, que quiero que traiga la relación // hace JOINS por detrás
      include: [
        // el atributo include recibe un array, porque pueden ser muchas relaciones
        {
          association: "actores", // el alias que le puse a la asociación
        },
      ],
    }).then(function (movie) {
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
      where: { rating: { [db.Sequelize.Op.gte]: 8 } }, // gt greater than - gte >=
      order: [["rating", "DESC"]],
      limit: 5,
    }).then(function (movies) {
      res.render("recommendedMovies", { movies: movies });
    });
  }, //Aqui debemos modificar y completar lo necesario para trabajar con el CRUD
  add: function (req, res) {
    db.Generos.findAll({
      //necesito aclararle a findAll, que quiero que traiga la relación // hace JOINS por detrás
      include: [
        // el atributo include recibe un array, porque pueden ser muchas relaciones
        {
          association: "peliculas", // el alias que le puse a la asociación
        },
      ],
    }).then(function (allGenres) {
      res.render("moviesAdd", { allGenres: allGenres });
    });
  },
  create: function (req, res) {
    ////1ro nombre de las columnas BBDD, igual que en el modelo. 2do nombre del campo del form
    db.Peliculas.create({
      title: req.body.title,
      length: req.body.length,
      rating: req.body.rating,
      awards: req.body.awards,
      release_date: req.body.release_date,
      genre_id: req.body.genre_id,
    });

    res.redirect("/movies");
  },
  edit: function (req, res) {
    //hay que pedir, los datos de la pelicula a editar, pero también los géneros, que están en otra tabla.
    //Por lo que hay vs pedidos asincrónicos. Los defino por separado:
    let pedidoPelicula = db.Peliculas.findByPk(req.params.id);
    // aún no pongo el "then", sino que termino de enumerar los pedidos asincrónicos
    let pedidoGeneros = db.Generos.findAll();

    Promise.all([pedidoPelicula, pedidoGeneros])
      //cuando obtenga todos los pedidos, recién ahí realiza el "then"
      .then(function ([Movie, allGenres]) {
        console.log(allGenres)
        res.render("moviesEdit", { Movie: Movie, allGenres: allGenres });
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
        genre_id: req.body.genre_id,
      },
      {
        where: {
          id: req.params.id, //en Qué fila lo quiero actualizar
        },
      }
    );
    res.redirect("/movies");
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
