/* jshint indent: 2 */

const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "items",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
      },
      sku: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING(55),
        allowNull: false,
      },
      expired_time: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        comment: "in month",
      },
      remark: {
        type: DataTypes.STRING(55),
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "items",
    }
  );
};
