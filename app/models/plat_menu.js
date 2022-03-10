const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plat_menu', {
    id: {
      type: DataTypes.STRING(50),
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      comment: "菜单ID"
    },
    menu_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "菜单名称"
    },
    menu_dsc: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "菜单描述"
    },
    menu_parent: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "上级目录名称"
    },
    menu_icon: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "图标"
    },
    menu_code: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "编码"
    },
    menu_level: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "层级"
    },
    menu_type: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "类型"
    },
    menu_sort: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "序号"
    },
    menu_status: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "状态"
    },
    creator: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "创建人"
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "创建时间"
    },
    update_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "修改时间"
    }
  }, {
    sequelize,
    tableName: 'plat_menu',
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
    ]
  });
};
