const { STRING } = require("sequelize");
const Sequelize = require("sequelize");
const db = require("../database");

const Book = db.define("book", {
  title: Sequelize.STRING,
  author: Sequelize.STRING,
  imageUrl: {
    type: Sequelize.STRING,
    default:
      "https://themorningnews.org/images/content/articles/long-list-the-year-in-fiction-2017.png", //1780 X 934
  },
  description: {
    type: Sequelize.TEXT,
  },
  year: {
    type: Sequelize.INTEGER,
    validate: {
      max: 2022,
      min: 2005,
    },
  },
  winner: {
    type: Sequelize.BOOLEAN,
    default: false,
  },
});
