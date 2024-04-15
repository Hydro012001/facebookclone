import { DataTypes, Model } from "sequelize";
import { PostAttribute } from "../attributes/post_attributes";
import { sequelize } from "../config/dbConfig";

class Post extends Model<PostAttribute> {
  declare title: string;
}
Post.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Post",
  }
);

export { Post };
