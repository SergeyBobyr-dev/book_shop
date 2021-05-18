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
    
     await queryInterface.bulkInsert('users', [{
      full_name: "Test1",
      phone_number: 1,
      email: "t1@gmail.com",
      role_name: "USER",
      password: "111111",
      age: 23,
      address: "Kharkiv",
      cc: "6666667"
      },
      {     
      full_name: "Test2",
      phone_number: 2,
      email: "t2@gmail.com",
      role_name: "ADMIN",
      password: "111111",
      age: 23,
      address: "Kharkiv",
      cc: "666666"
      }
    ], {});
  
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkDelete('users', null, {});
     
  }
};
