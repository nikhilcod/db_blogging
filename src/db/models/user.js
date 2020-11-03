//Import npm package "sequelize and md5"
const { DataTypes } = require("sequelize");
const md5 = require("md5");

//Export User Model
module.exports = function (sequelize) {
  return sequelize.define(
    "users",
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      firstName: {
        defaultValues: "firstName",
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      lastName: {
        defaultValues: "lastName",
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING(50),
        unique: true,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
    },
    {
      timestamps: false,
    }
  );
};
