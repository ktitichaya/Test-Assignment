require("dotenv").config();

const { MYSQL_DATABASE, MYSQL_USERNAME, MYSQL_PASSWOED, MYSQL_HOSTNAME } =
  process.env;
const Sequelize = require("Sequelize");
const sequelize = new Sequelize(
  MYSQL_DATABASE,
  MYSQL_USERNAME,
  MYSQL_PASSWOED,
  {
    host: MYSQL_HOSTNAME,
    dialect: "mysql",

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },

    operatorsAliases: false,
  }
);
module.exports = {
  results_ok: "OK",
  results_nok: "NOT OK",
  sequelize: sequelize,
};
