"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Countries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Countries.hasMany(models.Tanks, { foreignKey: "countryId", as: "Tanks" });
    }
  }
  Countries.init(
    {
      countryName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Countries",
    }
  );
  return Countries;
};
