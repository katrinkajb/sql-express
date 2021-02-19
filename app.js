const express = require('express');
const app = express();
const {cocktails} = require('./data.js');
const cors = require('cors');

app.use(cors());

// One per endpoint
app.get('/cocktails', (req, res) => {
  res.json( {results: cocktails });
});

app.get('/cocktails/:id', (req, res) => {
    const id = Number(req.params.id);
    const selectCocktail = cocktails.find((drink) => drink.id === id);
    
    res.json( {results: selectCocktail });
  });

module.exports = {
    app
};