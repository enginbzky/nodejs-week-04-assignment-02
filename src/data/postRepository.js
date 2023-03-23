import Post from "../models/postModel.js";

const findPost = async (pStatus) => {
  try {
    return await Post.findAll();
  } catch (error) {
    console.log(error);
  }
};

const createPost = async (pPost) => {
  try {
    return await Post.create(pPost);
  } catch (error) {
    console.log(error);
  }
};

export default { findPost, createPost };
