const express = require('express')
const router = express.Router();
const Complaints = require('../models/Complaints')

//GET
router.get("/", async (req, res) => {
  try {
    const complaints = await Complaints.find();
    res.send(complaints)
  } catch (error) {
    res.json({message: error})
  };
});

//POST
router.post('/', async (req,res)=>{
  const complaints = new Complaints({
    email: req.body.email,
    complaints: req.body.complaints,
  });
try {
   const savedComplaints = await complaints.save();
  res.json(savedComplaints);
} catch (error) {
  res.json({message: error})
}
})
module.exports = router