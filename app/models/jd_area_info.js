const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jd_area_info', {
    AreaID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "区域ID"
    },
    ParentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "区域上级ID"
    },
    AreaName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "区域名称"
    },
    AreaLevel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "区域等级 1：国，2：省，3：市"
    },
    AreaName2: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "",
      comment: "区域名称拼音"
    }
  }, {
    sequelize,
    tableName: 'jd_area_info',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "AreaID" },
        ]
      },
      {
        name: "UK_areainfo",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ParentId" },
          { name: "AreaName" },
        ]
      },
      {
        name: "IDX_areainfo_AreaLevel",
        using: "BTREE",
        fields: [
          { name: "AreaLevel" },
        ]
      },
    ]
  });
};
