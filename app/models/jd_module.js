const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jd_module', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "权限菜单id"
    },
    menu_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "名称"
    },
    father_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "父级id 第一级默认父级为0"
    },
    menu_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "类型 1菜单 2按钮"
    },
    menu_level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "等级"
    },
    menu_url: {
      type: DataTypes.STRING(200),
      allowNull: false,
      comment: "链接"
    },
    icon: {
      type: DataTypes.STRING(200),
      allowNull: false,
      comment: "图标"
    },
    sort: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "排序"
    },
    creator: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "创建人"
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "创建时间"
    },
    modified: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "修改时间"
    }
  }, {
    sequelize,
    tableName: 'jd_module',
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
