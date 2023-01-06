const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send('welcome to the server home page')
})

app.listen(process.env.PORT || 5000, () => {
    console.log('backend running')
})

