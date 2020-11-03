//Import "database.js" and "passport"
const { sequelize } = require("../db/database");
const pass = require("passport");

function Init(app) {
  //Post A Blog
  app.post(
    "/blogs",
    pass.authenticate("jwt", { session: false }),
    async function (request, response) {
      const { body } = request;
      const { blog_title, blog_description, blog_author } = body;

      const createdBlog = await sequelize.models.blogs.create({
        blog_title,
        blog_description,
        blog_author,
      });

      response.status(201).send(createdBlog);
    }
  );

  //Get All Blogs
  app.get("/blogs", async function (request, response) {
    const blogs = await sequelize.models.blogs.findAll({});

    response.status(200).send(blogs);
  });

  //Get A Blog BY ID
  app.get("/blogs/:id", async function (request, response) {
    const { id } = request.params;
    const blog = await sequelize.models.blogs.findOne({
      where: { id },
    });

    response.status(200).send(blog);
  });

  //Put A Blog By ID
  app.put(
    "/blogs/:id",
    pass.authenticate("jwt", { session: false }),
    async function (request, response) {
      const { id } = request.params;
      const blog = await sequelize.models.blogs.findOne({
        where: { id },
      });

      const { body } = request;
      const { blog_title, blog_description, blog_author } = body;

      blog.blog_title = blog_title ? blog_title : blog.blog_title;
      blog.blog_description = blog_description
        ? blog_description
        : blog.blog_description;
      blog.blog_author = blog_author ? blog_author : blog.blog_author;

      await blog.save();

      response.status(200).send(blog);
    }
  );

  //Delete A Blog By ID
  app.delete(
    "/blogs/:id",
    pass.authenticate("jwt", { session: false }),
    async function (request, response) {
      const { id } = request.params;
      const blog = await sequelize.models.blogs.findOne({
        where: { id },
      });

      const deletedBlog = await blog.destroy();
      response.status(200).send({ deletedBlog });
    }
  );
}

//Export Blog
module.exports = {
  Init,
};
