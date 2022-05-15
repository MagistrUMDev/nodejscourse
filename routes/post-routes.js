const express = require("express");
const {
  getPost,
  deletePost,
  editPost,
  updatePost,
  getPosts,
  addPost,
  getAddPost
} = require("../controllers/post-controller");

const router = express.Router();

router.delete("/posts/:id", deletePost);
router.get("/posts/:id", getPost);
router.get("/edit/post/:id", editPost);
router.put("/edit/post/:id", updatePost);
router.get("/posts", getPosts);
router.post("/add-post", addPost)
router.get("/add-post", getAddPost)

module.exports = router;
