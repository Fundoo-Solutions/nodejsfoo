
var express = require('express'),
    stocksCtrl = require('./stocks.ctrl');

var router = express.Router();

router.get('/', function(req, res) {
    stocksCtrl.getStocks(function(err, stocks) {
        res.json(stocks);
    });
});

router.get('/:id', function(req, res) {
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

module.exports = function(app) {
    app.use('/stocks', router);
};



