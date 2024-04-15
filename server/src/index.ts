import express, { Express } from "express";
import { connect } from "./utils/schemas";
import { routes } from "./routes";

const cors = require("cors");
const app: Express = express();

app.use(express.json());

app.use("/api", routes);

app.listen(5000, () => {
  connect();
  console.log("Running");
});
