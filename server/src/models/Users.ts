import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/dbConfig";
import { UserAttribute } from "../attributes/user_attributes";
import { HashPassword } from "../utils/encryptPass";
import { Post } from "./Post";

class User extends Model<UserAttribute> {
  declare email: string;
  declare password: string;
}
User.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
    hooks: {
      beforeCreate: async (user, options) => {
        const hashedPassword = await HashPassword(user.password);

        user.password = hashedPassword;
      },
    },
  }
);

User.hasMany(Post);
export { User };
