import express from "express";
const router = express.Router();

import postRepository from "../data/postRepository.js";

router.get("/", async (req, res) => {
  const postList = await postRepository.findPost(req.query.status);
  res.status(200).send(postList);
});

router.post("/", async (req, res) => {
  let post = req.body;
  const addedPost = await postRepository.createPost(post);
  res.status(201).send(addedPost);
});

export default router;
