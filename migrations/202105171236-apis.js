'use strict';
const apisData = require('../api')
module.exports = {
  up: async (queryInterface, DataTypes) => {
    
    await queryInterface.createTable('apis', {
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
    });


    await queryInterface.sequelize.query(`INSERT INTO apis(name) VALUES ${apisData}`)
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('apis');
  }
};
