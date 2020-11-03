//Import "database.js" and "md5"
const { sequelize } = require("../db/database");
const md5 = require("md5");

function Init(app) {
  //Post A Bookmark
  app.post(
    "bookmark",
    pass.authenticate("jwt", { session: false }),
    async function (request, response) {
      const { body } = request;
      const { blog_id, user_id } = body;

      const createdBookmark = await sequelize.models.bookmarks.create({
        blog_id,
        user_id,
      });

      response.status(201).send(createdBookmark);
    }
  );

  //Get All Bookmarks
  app.get(
    "/bookmark",
    pass.authenticate("jwt", { session: false }),
    async function (request, response) {
      const bookmarks = await sequelize.models.bookmarks.findAll({});

      response.status(200).send(bookmarks);
    }
  );

  //Get A Bookmark BY ID
  app.get(
    "/bookmark/:id",
    pass.authenticate("jwt", { session: false }),
    async function (request, response) {
      const { id } = request.params;
      const bookmark = await sequelize.models.bookmark.findOne({
        where: { id },
      });

      response.status(200).send(bookmark);
    }
  );
}

//Export user
module.exports = {
  Init,
};
