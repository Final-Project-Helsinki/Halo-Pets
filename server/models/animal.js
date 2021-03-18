'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Animal.belongsTo(models.User, {foreignKey: 'user_id'})
      Animal.hasMany(models.Favorite, {foreignKey: 'animal_id'})
    }
  };
  Animal.init({
    name: DataTypes.STRING,
    species: DataTypes.STRING,
    gender: DataTypes.STRING,
    dob: DataTypes.DATE,
    image_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Animal',
  });
  return Animal;
};