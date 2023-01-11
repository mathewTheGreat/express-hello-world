const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const transactionSchema = new Schema({
  title:  {
    type: String,
    required: true
  },
  iconName:  {
    type: String,
    required: true
  },
  category: {
    type: Number,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  type:  {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
 
module.exports = mongoose.model("Wallet", transactionSchema);