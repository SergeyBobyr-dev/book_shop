'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      this.belongsTo(models.type, { 
        foreignKey: 'type_id'
       });
      this.belongsTo(models.users, {
        foreignKey: 'user_id' 
      });
      this.belongsTo(models.categories, { 
        foreignKey: 'category_id' 
      });
    }
  
    
  };
  Books.init({
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
      unique: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false
    },
    year_of_production: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: false,
        references: {
          model: 'categories',
          key: 'id',
          as: 'category_id'
        }
    },
    rate: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: false
    },
    revenue: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: false,
        references: {
          model: 'users',
          key: 'id',
          as: 'user_id'
        }
    },
    type_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: false,
        references: {
          model: 'type',
          key: 'id',
          as: 'type_id'
        }
    },


  }, {
    sequelize,
    tableName: 'books',
    modelName: 'books',
  });
  return Books;
};