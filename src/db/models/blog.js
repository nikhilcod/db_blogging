//Import npm package "sequelize"
const { DataTypes } = require("sequelize");

//Export Blog Info Model
module.exports = function (sequelize) {
  return sequelize.define(
    "blogs",
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      blog_title: {
        defaultValues: "blog_title",
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      blog_description: {
        defaultValues: "blog_description",
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      blog_author: {
        defaultValues: "blog_author",
        allowNull: false,
        type: DataTypes.STRING(50),
      },
    },
    {
      timestamps: false,
    }
  );
};
