module.exports = (sequelize, DataTypes) => {
  let alias = "Actores";
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING(100),
    },
    last_name: {
      type: DataTypes.STRING(100),
    },
    rating: {
      type: DataTypes.DECIMAL(3, 1),
    },
    favorite_movie_id: {
      type: DataTypes.BIGINT(10).UNSIGNED,
    },
    /*
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
    tableName: "actors",
    timestamps: false,
    
  };

  const Actor = sequelize.define(alias, cols, config);
  //Cada vez que quiero hablar de una relación lo haré luego de la definición. Como una "asociación"
  Actor.associate = function (models) {
    // recibe todos los modelos que tenemos
    //aquí defino cómo son esas asociaciones:

    Actor.belongsToMany(models.Peliculas, { // Muchos a muchos
      // 1er parámetro, el modelo al que asocio
      as: "peliculas", //alias
      through: "actor_movie", //el nombre de la tabla pivot que une ambos modelos
      foreignKey: "actor_id", //nombre de la columna en la tabla pivot, que hace referencia al modelo actual (Actor)
      otherKey: "movie_id", //nombre de la columna en la tabla pivot, que hace referencia al modelo con el que se conecta (Pelicula)
      timestamps: false, //False en caso de que, la tabla pivot, no tenga createdAt y updatedAt
    });
  };

  return Actor;
};
