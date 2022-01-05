const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jd_user_role', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "主码"
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "用户id"
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "角色id"
    }
  }, {
    sequelize,
    tableName: 'jd_user_role',
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
        name: "user_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
          { name: "role_id" },
        ]
      },
    ]
  });
};
