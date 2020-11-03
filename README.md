# db_blogging

It is a basic Blogging App.

# Applications Requirement

Visual Studio Code
PostgreSQL
Postman

# Start building project

Open Command Prompt where we clone this repository

npm init

# dependencies:

npm install <name>

express
jsonwebtoken
md5
passport
passport-jwt
pg
pg-hstore
sequelize

# devDependencies

npm install <name> --save-dev

dotenv
nodemon

# Folder Structure

db_blogging
|---src
|-----|---controller
|-----|------------|---auth.js
|-----|------------|---blog.js
|-----|------------|user.js
|-----|---db
|-----|-----|---models
|-----|-----|--------|---blog.js
|-----|-----|--------|---user.js
|-----|-----|---database.js
|-----|---app.js
|-----|---jwt.js
|---node_modules
|---.gitignore
|---.env
|---package.json
|---package-lock.json
|---README.md

# Run Project

First make a database named "db_blogging" in pgAdmin of Postgres.

Then run below mentioned command in terminal
npm start

Open http://localhost:3002 to view it in the Postman

# Blogging app

post /auth/signup --- registers the user
post /AUTH/LOGIN --- login using jwt
post blogs/ --- create a blog for logged in user
get /blogs --- get list of blogs for user from all the other users
get /blogs/id --- get specific blog for user
put /blogs/id --- user can update it's own blog
delete /blogs/id --- user can delete his own blog
