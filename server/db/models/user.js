const Sequelize = require("sequelize");
const db = require("./database");

module.exports = db.define("user", {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  coordinates: {
    type: Sequelize.ARRAY(Sequelize.FLOAT),
    allowNull: true
  },
});
