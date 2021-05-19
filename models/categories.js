'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.books, { 
        foreignKey: 'category_id'
       });
    }
  };
  Categories.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    }
  }, {
    sequelize,
    tableName: 'categories',
    modelName: 'categories',
  });
  return Categories;
};