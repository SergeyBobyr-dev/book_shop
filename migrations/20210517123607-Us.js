'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('roles', {
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
    });

    await queryInterface.createTable('users', {
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
    });

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

    await queryInterface.createTable('roles_apis', {
      role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,
        references: {
            model: 'roles',
            key: 'id'
        }
    },
    api_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,
        references: {
            model: 'apis',
            key: 'id'
        }
      }
    });

    await queryInterface.createTable('categories', {
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

    await queryInterface.createTable('type', {
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

    await queryInterface.createTable('books', {
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
            key: 'id'
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
            key: 'id'
          }
      },
      type: {
          type: DataTypes.INTEGER,
          allowNull: true,
          unique: false,
          references: {
            model: 'type',
            key: 'id'
          }
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropAllTables();
  }
};
