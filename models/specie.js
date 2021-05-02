const { sequelize, DataTypes } = require("../conexion/conexion");

const Specie = sequelize.define(
  "specie",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    clasificacion: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    designacion: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    alturaPromedio: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    colorPiel: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    colorCabello: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    colorOjo: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    promedioVida: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    idioma: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    tableName: "specie",
    timestamps: false,
  }
);

module.exports.Specie = Specie;
