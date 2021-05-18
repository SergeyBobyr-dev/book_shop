'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Users.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    phone_number: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    role_name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
      references: {
        model: 'roles',
        key: 'name'
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    proffit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false
    },
    cc: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }

  }, {
    sequelize,
    tableName: 'users',
    modelName: 'users',
  });
  return Users;
};