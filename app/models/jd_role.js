const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jd_role', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "角色id"
    },
    role_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "角色名称"
    },
    role_dsc: {
      type: DataTypes.STRING(500),
      allowNull: false,
      comment: "角色描述"
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
    tableName: 'jd_role',
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
