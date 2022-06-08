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

  return Genero;
};
