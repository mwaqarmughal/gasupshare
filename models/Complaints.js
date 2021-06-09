const mongoose = require('mongoose');

const complaintsSchema = mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
    unique: false,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, "is invalid"],
  },
  category:{
    type: String,
    required: [true, "can't be blank"],
  },
  name:{
    type: String,
    required: [true, "can't be blank"],
  },

  complaints: {
    type: String,
    required: [true, "can't be blank"],
  },
});

module.exports = mongoose.model("Complaints", complaintsSchema);