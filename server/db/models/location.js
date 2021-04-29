const Sequelize = require("sequelize");
const db = require("./database");

module.exports = db.define("location", {
  coordinates: {
    type: Sequelize.ARRAY(Sequelize.FLOAT),
    allowNull: true
  },
});
