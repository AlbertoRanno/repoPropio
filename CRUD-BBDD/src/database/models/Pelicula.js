module.exports = (sequelize, DataTypes) => {
  let alias = "Peliculas";
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(500),
    },
    length: {
      type: DataTypes.INTEGER,
    },
    rating: {
      type: DataTypes.DECIMAL,
    },
    awards: {
      type: DataTypes.INTEGER,
    },
    release_date: {
      type: DataTypes.DATE,
    },
    createdAt: {
      field: "created_at", //IMPORTANTE
      type: DataTypes.DATE,
    },
    updatedAt: {
      field: "updated_at", //IMPORTANTE
      type: DataTypes.DATE,
    },
    genre_id: {
      type: DataTypes.INTEGER,
    },
  };
  let config = {
    tableName: "movies",
    timestamps: true,
  };

  const Pelicula = sequelize.define(alias, cols, config);
  //Cada vez que quiero hablar de una relación lo haré luego de la definición. Como una "asociación"
  Pelicula.associate = function (models) {  // recibe todos los modelos que tenemos
  //aquí defino cómo son esas asociaciones:

  Pelicula.belongsTo(models.Generos, { // Muchos a 1
    //la película pertenece a un género que sale de los modelos./ Le digo con que tabla se relaciona
    as: "generos", // un alias para llamar la relación,
    foreignKey: "genre_id", // Cuál es la columna de la bbdd que une a éstas 2 tablas
  }); 

  Pelicula.belongsToMany(models.Actores, { // Muchos a Muchos
    // 1er parámetro, el modelo al que asocio
    as: "actores", //alias
    through: "actor_movie", //el nombre de la tabla pivot que une ambos modelos
    foreignKey: "movie_id", //nombre de la columna en la tabla pivot, que hace referencia al modelo actual (Pelicula)
    otherKey: "actor_id", //nombre de la columna en la tabla pivot, que hace referencia al modelo con el que se conecta (Actores)
    timestamps: false, //False en caso de que, la tabla pivot, no tenga createdAt y updatedAt
  });

  }

  return Pelicula;
};
