const express = require("express");
const app = express();
const transactionroutes = require('./routes/transactionroutes')


const mongoose = require("mongoose");
//configure mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://mongo:W8C3r87LZ0mPd2b4e2j2@containers-us-west-126.railway.app:6482",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

app.listen(process.env.PORT || 5000, () => {
  console.log('backend running')
})
app.use("/api/transactions", transactionroutes);
