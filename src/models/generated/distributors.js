/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('distributors', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    min_buy: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    max_buy: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    city: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    province: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    remark: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'distributors',
    timestamps: false
    });
};
