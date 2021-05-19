'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.books, { 
        foreignKey: 'type_id'
       });
    }
  };
  Type.init({
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
    tableName: 'type',
    modelName: 'type',
  });
  return Type;
};