import { routes } from "./routes";
import { connect } from "./utils/schema";

import express, { Express } from "express";

const cors = require("cors");
const app: Express = express();

app.use(express.json());

app.use("/api", routes);
app.listen(5000, () => {
  connect();
  console.log("Running", 5000);
});
