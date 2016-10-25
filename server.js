var express = require('express');
var app = express();

require('dotenv').config();
var key = process.env.WEATHER_KEY;
console.log(key);

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Express is up on port 3000');
});
