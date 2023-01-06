const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const transactionSchema = new Schema({
  title: String,
  iconName: String,
  category: Number,
  value: Number,
  type: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
 
module.exports = mongoose.model("Wallet", transactionSchema);