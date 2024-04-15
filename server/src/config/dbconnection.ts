const mysql = require("mysql");

const host = "localhost";
const user = "root";
const password = "";

export const conn = mysql.createConnection({
  host: host,
  user: user,
  password: password,
});
