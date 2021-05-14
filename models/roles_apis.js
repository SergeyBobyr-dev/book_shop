'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Roles_apis extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Roles_apis.init({
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
    }, {
        sequelize,
        tableName: 'roles_apis',
        modelName: 'roles_apis',
    });
    return Roles_apis;
};