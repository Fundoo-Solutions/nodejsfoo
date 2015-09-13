
var express = require('express'),
    stocksCtrl = require('./stocks.ctrl');


var app = express();

app.get('/', function(req, res) {
    res.send('<h1>Hello World</h1>');

});

app.listen(9000, function() {
    console.log('Please navigate to http://localhost:9000');
});
