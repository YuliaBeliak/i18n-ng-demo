const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));

app.get('/en-US', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/en-US/index.html'));
});

app.get('/ru', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/ru/index.html'));
});

app.get('/*', function(req, res) {
  res.redirect('/en-US');
});


app.listen(process.env.PORT || 8080, () => console.log('Listening 8080...'));
