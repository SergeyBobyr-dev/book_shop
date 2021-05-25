'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Apis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      this.belongsToMany(models.roles, { foreignKey: 'api_id', through: 'roles_apis'});
    }
  };
  Apis.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    tableName: 'apis',
    modelName: 'apis',
    createdAt: false,
    updatedAt: false

  });
  return Apis;
};