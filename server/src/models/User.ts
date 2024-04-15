import { conn } from "../config/dbconnection";
import { DataResponse } from "../responses/data_response";

export class User {
  email: string;
  password: string;

  constructor(init: User) {
    this.email = init.email;
    this.password = init.password;
  }

  public async add(query: string): Promise<DataResponse> {
    try {
      await conn.query(query, [this]);
      return {
        succedded: true,
        msg: "Added Successfully",
      };
    } catch (error: any) {
      return {
        succedded: false,
        msg: error,
      };
    }
  }
}
