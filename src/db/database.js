//Import environment variables
require("dotenv").config();

//Import npm package "sequelize, pg and pg-hstore"
const { Sequelize, DataTypes } = require("sequelize");

//Define attributes of database
const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  dialect: "postgres",
  sync: true,
});

//Define tables in database
const blogs = require("./models/blog")(sequelize);
const users = require("./models/user")(sequelize);
const bookmarks = require("./models/bookmark")(sequelize);

//Authentication and Synchronization
const init = async function () {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log("Database Connected...");
  } catch (error) {
    console.log("db --> init --> ", error);
  }
};

//Export Database
module.exports = {
  sequelize,
  blogs,
  users,
  bookmarks,
  init,
};
