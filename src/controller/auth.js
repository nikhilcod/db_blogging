//Import "database.js and jwt.js"
const { sequelize } = require("../db/database");
const { generateJWT, sanitizeUser } = require("../jwt");

//Import "md5 and passport"
const md5 = require("md5");
const pass = require("passport");

//Function for Authentication
function Init(app) {
  //Post Token and User Information
  app.post("/AUTH/LOGIN", async function (request, response) {
    const { email, password } = request.body;
    const user = await sequelize.models.users.findOne({ where: { email } });

    if (!user || user.password !== md5(password)) {
      response.status(401).send({
        message: "Either email or password is incorrect",
      });
    }

    const jwt = generateJWT(sanitizeUser(user));
    response.status(200).send({ token: jwt, user: sanitizeUser(user) });
  });
}

//Export
module.exports = {
  Init,
};
