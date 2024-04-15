import { Request, Response } from "express";
import { User } from "../../models/Users";

export const handlersAddUser = (req: Request, res: Response) => {
  const user = req.body;

  User.create(user)
    .then((result: any) => {
      return res.status(200).json({ succeed: true, msg: "Added" });
    })
    .catch((error: any) => {
      return res.status(400).json({ succeed: false, msg: error });
    });
};
