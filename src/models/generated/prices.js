/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prices', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    item_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    brands_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    distributor_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    uom_id: {
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
    tableName: 'prices',
    timestamps: false
    });
};
