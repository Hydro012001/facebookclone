import express from "express";
import { handlersAddUser } from "./handlers/add/user";

export const routes = express.Router();

routes.post("/add-user", handlersAddUser);
