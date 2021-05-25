'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('roles', [{
      name: "USER"
      },
      {     
      name: "ADMIN"
      }
    ], {});
  
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkDelete('roles', null, {});
     
  }
};
