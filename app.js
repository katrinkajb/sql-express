require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

// One per endpoint
app.get('/cocktails', (req, res) => {
  res.json('This is where it shows on the browser!');
});



module.exports = {
    app
}