const express = require('express')
const router = express.Router();
const Post = require('../models/Post')



//GET
router.get("/", async (req, res) => {
  try {
    const posts= await Post.find();
    res.send(posts)
  } catch (error) {
    res.json({message: error})
  };
});

//POsT
router.post('/', async (req,res)=>{
  const post = new Post({
    title :  req.body.title
  })
try {
  
   const savedPost = await post.save();
  res.json(savedPost);
} catch (error) {
  res.json({message: error})
}
})
module.exports = router