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
  };
  let config = {
    tableName: "movies",
    timestamps: true,
  };

  const Pelicula = sequelize.define(alias, cols, config);

  return Pelicula;
};
