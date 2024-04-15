import { sequelize } from "../config/dbConfig";

export async function connect() {
  //await sequelize.authenticate();

  console.log("Connection has been established successfully.");

  await sequelize.sync({ alter: true });
}
