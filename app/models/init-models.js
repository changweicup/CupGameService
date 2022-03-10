var DataTypes = require("sequelize").DataTypes;
var _plat_menu = require("./plat_menu");

function initModels(sequelize) {
  var plat_menu = _plat_menu(sequelize, DataTypes);


  return {
    plat_menu,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
