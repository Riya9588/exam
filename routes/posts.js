const router = require("express").Router();
router.get("https://jsonplaceholder.typicode.com/posts/[postId]/comments", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  module.exports = router;