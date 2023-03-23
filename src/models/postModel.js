import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("Bloggy", "hicoders", "hicoders_12", {
  host: "localhost",
  dialect: "mysql",
});

const Post = sequelize.define(
  "Post",
  {
    id: {
      type: DataTypes.INTEGER,
      // autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      // allowNull: false,
    },
    createedAt: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    updatedAt: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
  },
  {
    tableName: "posts",
  }
);

export default Post;
