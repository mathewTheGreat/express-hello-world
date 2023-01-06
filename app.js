const express = require("express");
const app = express();

app.get("/", (req, res) => res.send('Mathew Momanyi'));

app.listen(process.env.PORT || 5000, () => {
    console.log('backend running')
})

