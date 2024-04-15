import { Request, Response } from "express";
import { User } from "../../models/User";

export const handlersAddUser = async (req: Request, res: Response) => {
  const user = new User(req.body);

  const query = "insert into user set ?";
  const response = await user.add(query);

  console.log(response);
  return res.status(200).json(response);
};
