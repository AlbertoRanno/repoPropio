module.exports = (sequelize, DataTypes) => {
  let alias = "Generos";
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
    },
    ranking: {
      type: DataTypes.DECIMAL,
    },
    active: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      field: "created_at", //IMPORTANTE
      type: DataTypes.DATE,
    },
    updatedAt: {
      field: "updated_at", //IMPORTANTE
      type: DataTypes.DATE,
    },
  };
  let config = {
    tableName: "genres",
    timestamps: true,
  };

  const Genero = sequelize.define(alias, cols, config);
  //Cada vez que quiero hablar de una relación lo haré luego de la definición. Como una "asociación"
  Genero.associate = function (models) {
    // recibe todos los modelos que tenemos
    //aquí defino cómo son esas asociaciones
    Genero.hasMany(models.Peliculas, {
      // 1 a Muchos
      //un género, tiene muchas películas./ Le digo con que tabla se relaciona
      as: "peliculas", // un alias para llamar la relación,
      foreignKey: "genre_id", // Cuál es la columna de la bbdd que une a éstas 2 tablas
    });
  };

  return Genero;
};
