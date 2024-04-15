import express from "express";
import { handlersAddUser } from "./handlers/add/user";
import { handlerSelectAllUser } from "./handlers/select/allUser";

export const routes = express.Router();

routes.post("/add-user", handlersAddUser);
routes.get("/all-user", handlerSelectAllUser);
