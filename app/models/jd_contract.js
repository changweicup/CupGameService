const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jd_contract', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "id"
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "贷款id"
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "合同标题"
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "合同内容"
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
    tableName: 'jd_contract',
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
