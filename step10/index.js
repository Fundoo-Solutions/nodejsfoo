
var express = require('express'),
    bodyParser = require('body-parser'),
    stocksCtrl = require('./stocks.ctrl');


var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.get('/all', function(req, res) {
    stocksCtrl.getStocks(function(err, stocks) {
        res.json(stocks);
    });
});

app.get('/:id', function(req, res) {
    stocksCtrl.getStocks(function(err, stocks) {
        for (var i = 0; i < stocks.length; i++) {
            if (stocks[i].id === req.params.id) {
                return res.json(stocks[i]);
            }
        }
        res.status(400);
        res.json({msg: "No stock found with id " + req.params.id});
    });
});

app.post('/register', function(req, res) {
    console.log('Register called with ', req.body);
    setTimeout(function() {
        res.json({msg: "Success"});
    }, 2000);

});


app.listen(9000, function() {
    console.log('Please navigate to http://localhost:9000');
});
