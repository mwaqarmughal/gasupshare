const mongoose = require('mongoose');

const complaintsSchema = mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, "is invalid"],
  },

  complaints: {
    type: String,
    required: [true, "can't be blank"],
  },
});

module.exports = mongoose.model("Complaints", complaintsSchema);