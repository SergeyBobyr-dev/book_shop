'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.users, { foreignKey: 'role_name' });
    }
    static associate(models) {
      this.belongsToMany(models.apis, { foreignKey: 'role_id', through: 'roles_apis'});
    }
  };
  Roles.init({
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
      unique: true
    }
  }, {
    sequelize,
    tableName: 'roles',
    modelName: 'roles',
  });
  return Roles;
};