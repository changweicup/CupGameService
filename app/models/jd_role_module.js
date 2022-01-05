const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jd_role_module', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "主码"
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "角色id"
    },
    module_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "权限id"
    }
  }, {
    sequelize,
    tableName: 'jd_role_module',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "module_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "module_id" },
          { name: "role_id" },
        ]
      },
    ]
  });
};
