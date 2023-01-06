const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send('Mathew Momanyi')
})

app.listen(process.env.PORT || 5000, () => {
    console.log('backend running')
})

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://mongo:W8C3r87LZ0mPd2b4e2j2@containers-us-west-126.railway.app:6482";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("wallet").collection("63b7f9f80ea4ce001c42d1bb");
  // perform actions on the collection object
    console.log(collection)
  client.close();
});
