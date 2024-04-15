import { conn } from "../config/dbconnection";
import { dummayUser } from "../models/dummyData/UserDummy";
import { User } from "../models/User";

type FieldType = {
  string: string;
  number: string;
};

const fieldType: FieldType = {
  string: "varchar(255)",
  number: "int",
};

const dbName = "facebookclone";

export async function connect() {
  await conn.connect(async () => {
    await conn.query(`CREATE DATABASE IF NOT EXISTS ${dbName}; `, () => {
      console.log("Database Created");
    });
    await conn.query(`USE ${dbName}`, () => {
      console.log("Database Use");
    });
    let fields = Object.keys(new User({} as User));
    let dropIfExist = `DROP TABLE IF EXISTS user`;
    await conn.query(dropIfExist, function () {
      console.log("Table user drop");
    });

    let user = `CREATE TABLE user ( id int PRIMARY KEY  NOT NULL AUTO_INCREMENT,`;
    fields.forEach((field: string, index: number) => {
      const hasComma = index < fields.length - 1 ? "," : "";
      const closingParenthesis = index === fields.length - 1 ? ")" : "";
      user += `${field} ${
        fieldType[
          typeof dummayUser[
            field as unknown as keyof User
          ] as unknown as keyof FieldType
        ]
      }  ${hasComma} ${closingParenthesis}`;
    });

    console.log(user);
    await conn.query(user, function () {
      console.log("Table user created");
    });
  });
}
