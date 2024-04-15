import { Request, Response } from "express";
import { User } from "../../models/Users";

export const handlerSelectAllUser = async (req: Request, res: Response) => {
  const user = await User.findAll();

  return res.status(200).json(user);
};
