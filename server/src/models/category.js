"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Caterogy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Caterogy.init(
    {
      code: DataTypes.STRING,
      value: DataTypes.STRING,
      subheader: DataTypes.STRING,
      header: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Caterogy;
};
