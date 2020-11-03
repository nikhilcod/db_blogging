//Import environment variables
require("dotenv").config();

//Import "express and passport"
const express = require("express");
const { request } = require("express");
const pass = require("passport");

//Import "database.js and jwt.js"
const db = require("./db/database");
const { SIGNATURE, sanitizeUser } = require("./jwt");

//Import "auth.js, user.js and blog.js"
const authConfig = require("./controller/auth");
const userConfig = require("./controller/user");
const blogConfig = require("./controller/blog");

//Import "passport-jwt"
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = SIGNATURE;

//Set Port Number
const PORT = process.env.PORT;

const app = express();

pass.use(
  new JwtStrategy(options, async function (payload, done) {
    const user = await db.sequelize.models.users.findOne({ id: payload.id });

    if (!user) {
      done(null, false);
    }
    done(null, sanitizeUser(user));
  })
);

app.use(express.json());
app.use(express.urlencoded());
app.use(pass.initialize());

authConfig.Init(app);
userConfig.Init(app);
blogConfig.Init(app);

db.init().then(console.log).catch(console.log);

app.listen(PORT, function () {
  console.log(`Server started at Port ${PORT}`);
});
