const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jd_user', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "id"
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "名称"
    },
    identity_card: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "身份证"
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "出生日期"
    },
    sex: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "性别"
    },
    marriage: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "婚姻"
    },
    education: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "教育程度"
    },
    address1: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "居住地址"
    },
    address2: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "户籍地址"
    },
    phone: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "居住电话"
    },
    mobile_phone: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "手机"
    },
    company: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "公司全称"
    },
    trade: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "所属行业"
    },
    position: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "职位"
    },
    address3: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "公司地址"
    },
    company_type: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "公司类型"
    },
    company_email: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "公司邮箱"
    },
    company_phone: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "公司电话"
    },
    income: {
      type: DataTypes.DOUBLE(9,2),
      allowNull: true,
      comment: "月收入(元)"
    },
    contact: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "家庭联系人"
    },
    contact_name: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "联系人名称"
    },
    contact_phone: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "联系人电话"
    },
    contact2: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "关系2"
    },
    contact2_name: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "关系2人名称"
    },
    contact2_phone: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "关系2人电话"
    },
    contact2_dep: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "关系2人部门"
    },
    contact2_pos: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "关系2人职位"
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
    tableName: 'jd_user',
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
