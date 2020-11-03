//Import npm package "sequelize and md5"
const { DataTypes } = require("sequelize");
const md5 = require("md5");

//Export Bookmark Model
module.exports = function (sequelize) {
  return sequelize.define(
    "bookmarks",
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      blog_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );
};
