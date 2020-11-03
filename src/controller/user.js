//Import "database.js" and "md5"
const { sequelize } = require("../db/database");
const md5 = require("md5");

function Init(app) {
  //Post A User
  app.post("/auth/signup", async function (request, response) {
    const { body } = request;
    const { firstName, lastName, email, password } = body;

    const createdUser = await sequelize.models.users.create({
      firstName,
      lastName,
      email,
      password: md5(password),
    });

    const { password: dbPassword, ...sanitizedUser } = JSON.parse(
      JSON.stringify(createdUser)
    );
    response.status(201).send(sanitizedUser);
  });

  //Get All Users
  app.get("/user", async function (request, response) {
    const users = await sequelize.models.users.findAll({});

    response.status(200).send(users);
  });

  //Get A User BY ID
  app.get("/user/:id", async function (request, response) {
    const { id } = request.params;
    const user = await sequelize.models.users.findOne({ where: { id } });

    response.status(200).send(user);
  });

  //Put A User By ID
  app.put("/user/:id", async function (request, response) {
    const { id } = request.params;
    const user = await sequelize.models.users.findOne({ where: { id } });

    const { body } = request;
    const { firstName, lastName, email, password } = body;

    user.firstName = firstName ? firstName : user.firstName;
    user.lastName = lastName ? lastName : user.lastName;
    user.email = email ? email : user.email;

    await user.save();

    const { password: dbPassword, ...sanitizedUser } = JSON.parse(
      JSON.stringify(user)
    );
    response.status(200).send(sanitizedUser);
  });

  //Delete A User By ID
  app.delete("/user/:id", async function (request, response) {
    const { id } = request.params;
    const user = await sequelize.models.users.findOne({ where: { id } });

    const deletedUser = await user.destroy();
    response.status(200).send({ deletedUser });
  });
}

//Export user
module.exports = {
  Init,
};
