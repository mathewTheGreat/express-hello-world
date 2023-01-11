const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.use("/", (req, res) => {
    res.send('welcome to the server home page')
})

app.listen(process.env.PORT || 5000, () => {
    console.log('backend running')
})

