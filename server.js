const express = require("express");
const app = express();
/*const {
  getAllTransactions,
  createTransaction,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
} = require("./controllers/walletcontroller");*/

const {createTransaction} = require('./services/transactionservice');

const router = express.Router();

app.get("/", (req, res) => {
    res.send('Mathew Momanyi')
})

app.listen(process.env.PORT || 5000, () => {
    console.log('backend running')
})




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

async function findAllDocuments(model) {
  try {
    const documents = await model.find({});
     // console.log(documents)
    return documents;
  } catch (error) {
    console.error(error);
    return error;
  }
}

var transaction = {title: 'Food', iconName: 'arrow',category: 0,value: 20,type: 1,createdAt: ''}
createTransaction(transaction) 

/*findAllDocuments(Test).then(res => {
        console.log(res)
      })
      .catch(error => {
        console.error(error);
      });*/

//console.log(t)