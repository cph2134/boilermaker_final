const db = require("./database");

const Book = require("./models/Book");
// const User = require("./models/User");

//associations could go here!

module.exports = {
  db,
  models: {
    Book,
    // User,
  },
};
