const mongoose = require('mongoose');

const partnershipSchema = mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, "is invalid"],
  },
  qty: {
    type: Number,
    match: [Number > 0, "is invalid"],
    default: 0,
  },
  phone: {
    type: Number,
    required: [true, "Can't be blank"],
  },
  enquiry: {
    type: String,
    required: [true, "Can't be blank"],
  },
  CNIC: {
    type: Number,
    required: [true, "Can't be blank"],
  },
  address: {
    type: String,
    required: [true, "Can't be blank"],
  },
  company: {
    type: String,
    required: [true, "Can't be blank"],
  },
  pumpCity: {
    type: String,
    required: [true, "Can't be blank"],
  },
});

module.exports=mongoose.model('Partnership', partnershipSchema)