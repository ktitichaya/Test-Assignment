const Sequelize = require("sequelize");
require("dotenv").config();

const { MYSQL_DATABASE, MYSQL_USERNAME, MYSQL_PASSWOED, MYSQL_HOSTNAME } =
  process.env;
const sequelize = new Sequelize(
  MYSQL_DATABASE,
  MYSQL_USERNAME,
  MYSQL_PASSWOED,
  {
    server: MYSQL_HOSTNAME,
    dialect: "mysql",
  }
);

(async () => {
  await sequelize.authenticate();
})();
module.exports = sequelize;
