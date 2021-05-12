const express = require('express')
const router = express.Router();
const User = require('../models/User')



//GET
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users)
  } catch (error) {
    res.json({message: error})
  };
});



//POST
router.post('/', async (req,res)=>{
  const users = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });
try {
   const savedUser = await users.save();
  res.json(savedUser);
} catch (error) {
  res.json({message: error})
}
})
module.exports = router