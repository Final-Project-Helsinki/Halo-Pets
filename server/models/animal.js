'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Adoption extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Adoption.belongsTo(models.User, {foreignKey: 'user_id'})
      Adoption.hasMany(models.Favorite, {foreignKey: 'adoption_id'})
    }
  };
  Adoption.init({
    name: DataTypes.STRING,
    species: DataTypes.STRING,
    gender: DataTypes.STRING,
    dob: DataTypes.DATE,
    image_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Adoption',
  });
  return Adoption;
};