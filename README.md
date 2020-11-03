# db_blogging

It is a basic Blogging App.

# Applications Requirement

1. Visual Studio Code
2. PostgreSQL
3. Postman

# Start building project

Open Command Prompt where we clone this repository

npm init

# dependencies:

npm install <name>

1. express
2. jsonwebtoken
3. md5
4. passport
5. passport-jwt
6. pg
7. pg-hstore
8. sequelize

# devDependencies

npm install <name> --save-dev

1. dotenv
2. nodemon

# Folder Structure

- db_blogging
- |---src
- |-----|---controller
- |-----|------------|---auth.js
- |-----|------------|---blog.js
- |-----|------------|user.js
- |-----|---db
- |-----|-----|---models
- |-----|-----|--------|---blog.js
- |-----|-----|--------|---user.js
- |-----|-----|---database.js
- |-----|---app.js
- |-----|---jwt.js
- |---node_modules
- |---.gitignore
- |---.env
- |---package.json
- |---package-lock.json
- |---README.md

# Run Project

First make a database named "db_blogging" in pgAdmin of Postgres.

Then run below mentioned command in terminal
npm start

Open http://localhost:3002 to view it in the Postman

# Blogging app

1. post /auth/signup --- registers the user
2. post /AUTH/LOGIN --- login using jwt
3. post blogs/ --- create a blog for logged in user
4. get /blogs --- get list of blogs for user from all the other users
5. get /blogs/id --- get specific blog for user
6. put /blogs/id --- user can update it's own blog
7. delete /blogs/id --- user can delete his own blog
