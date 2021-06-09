const express = require('express')
const router = express.Router();
const Partnership = require('../models/Partnership')


//GET
router.get("/", async (req, res) => {
  try {
    const partnership = await Partnership.find({accepted: false});
    res.send(partnership);
  } catch (error) {
    res.json({message: error})
  };
});
router.get("/Real", async (req, res) => {
  try {
    const partnership = await Partnership.find({accepted: true});
    res.send(partnership);
  } catch (error) {
    res.json({message: error})
  };
});

//POST
router.post("/update", async (req, res) => {
  var myquery = { _id: req.body.id };
  var newvalues = { $set: { accepted: req.body.accepted } };
  Partnership.updateOne(myquery, newvalues, (err, response) => {
    res.json(response);
  });
});

router.post('/', async (req,res)=>{
  const partnership = new Partnership({
    email: req.body.email,
    qty: req.body.qty,
    phone: req.body.phone,
    enquiry: req.body.enquiry,
    CNIC: req.body.CNIC,
    address: req.body.address,
    company: req.body.company,
    pumpCity: req.body.pumpCity,
    accepted: false,
  });
try {
  const savedPartnership = await partnership.save();
  res.json(savedPartnership);
  // console.log(savedPartnership)
} catch (error) {
  res.json({message: error})
}
})
module.exports = router