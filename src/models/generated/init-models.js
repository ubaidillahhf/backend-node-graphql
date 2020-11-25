var DataTypes = require("sequelize").DataTypes;
var _accounts = require("./accounts");
var _distributors = require("./distributors");
var _item_categories = require("./item_categories");
var _brands = require("./brands");
var _items = require("./items");
var _prices = require("./prices");
var _uoms = require("./uoms");
var _currencies = require("./currencies");
var _roles = require("./roles");

function initModels(sequelize) {
  var accounts = _accounts(sequelize, DataTypes);
  var distributors = _distributors(sequelize, DataTypes);
  var item_categories = _item_categories(sequelize, DataTypes);
  var brands = _brands(sequelize, DataTypes);
  var items = _items(sequelize, DataTypes);
  var prices = _prices(sequelize, DataTypes);
  var uoms = _uoms(sequelize, DataTypes);
  var currencies = _currencies(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);

  return {
    accounts,
    distributors,
    item_categories,
    brands,
    items,
    prices,
    uoms,
    currencies,
    roles,
  };
}
module.exports = { initModels };
