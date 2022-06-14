//modelo "pivot"

module.exports = (sequelize, DataTypes) => {
  let alias = "PeliculasActores";
  let cols = {
    /*
    actor_id: {
      type: DataTypes.INTEGER,
      references: { model: Actor, key: id },
    },
    movie_id: {
      type: DataTypes.INTEGER,
      references: { model: Pelicula, key: id },
    } 
    createdAt: {
      field: "created_at", //IMPORTANTE
      type: DataTypes.DATE,
    },
    updatedAt: {
      field: "updated_at", //IMPORTANTE
      type: DataTypes.DATE,
    },*/
  };
  let config = {
    tableName: "actor_movie",
    timestamps: false,
  };

  
    // FAAAALTAAA TERMINARRR DE ADAPTAR!!!


  const PeliculaActor = sequelize.define(alias, cols, config);

  /*
  //Cada vez que quiero hablar de una relación lo haré luego de la definición. Como una "asociación"
  Pelicula.associate = function (models) {
    // recibe todos los modelos que tenemos
    //aquí defino cómo son esas asociaciones:

    Pelicula.belongsToMany(models.Actores, {
      // Muchos a Muchos
      // 1er parámetro, el modelo al que asocio
      as: "actores", //alias
      through: "actor_movie", //el nombre de la tabla pivot que une ambos modelos
      foreignKey: "movie_id", //nombre de la columna en la tabla pivot, que hace referencia al modelo actual (Pelicula)
      otherKey: "actor_id", //nombre de la columna en la tabla pivot, que hace referencia al modelo con el que se conecta (Actores)
      timestamps: false, //False en caso de que, la tabla pivot, no tenga createdAt y updatedAt
    });
  };*/

  return PeliculaActor;
};