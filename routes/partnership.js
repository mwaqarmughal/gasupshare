const express = require('express')
const router = express.Router();
const Partnership = require('../models/Partnership')



//GET
router.get("/", async (req, res) => {
  try {
    const partnership = await Partnership.find();
    res.send(partnership);
  } catch (error) {
    res.json({message: error})
  };
});


//POST
router.post('/', async (req,res)=>{
  const partnership = new Partnership({
    email: req.body.email,
    qty: req.body.qty,
    phone: req.body.phone,
    enquiry: req.body.enquiry,
    fuelStation: req.body.fuelStation
  });
try {
   const savedPartnership = await partnership.save();
  res.json(savedPartnership);
} catch (error) {
  res.json({message: error})
}
})
module.exports = router