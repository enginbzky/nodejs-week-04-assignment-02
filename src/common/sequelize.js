import { Sequelize } from "sequelize";
import Post from "../models/postModel.js";

const sequelize = new Sequelize("Bloggy", "hicoders", "hicoders_12", {
  host: "localhost",
  dialect: "mysql",
  define: {
    freezeTableName: true,
  },
});

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    await Post.sync();
    console.log("Connected!");
  } catch (error) {
    console.log("Error");
  }
};

connectToDatabase();
