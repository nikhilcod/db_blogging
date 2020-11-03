//Import "jsonwebtoken"
const jwt = require("jsonwebtoken");
//Import environment variable
require("dotenv").config();

//Signature
const SIGNATURE = process.env.SIGNATURE;

//Function to generate token
function generateJWT(payload) {
  return jwt.sign(payload, SIGNATURE, { expiresIn: "1d" });
}

//Function to Remove Password from User Details while Display
function sanitizeUser(user) {
  const { password: dbPassword, ...sanitizedUser } = JSON.parse(
    JSON.stringify(user)
  );
  return sanitizedUser;
}

//Export
module.exports = {
  SIGNATURE,
  generateJWT,
  sanitizeUser,
};
