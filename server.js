const express = require("express");
const app = express();

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
    return documents;
  } catch (error) {
    console.error(error);
    return error;
  }
}

async function createDocument(model, document) {
  try {
    const result = await model.create(document);
    return result;
  } catch (error) {
    console.error(error);
    return error;
  }
}

const Test = mongoose.model('Test', new mongoose.Schema({ name: String }));
const newDocument = { name: 'mathew' };
const m = createDocument(Test, newDocument);


var t = findAllDocuments(Test);

console.log(t)