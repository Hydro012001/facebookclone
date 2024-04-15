const { Sequelize } = require("sequelize");

export const sequelize = new Sequelize("facebookclone", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
