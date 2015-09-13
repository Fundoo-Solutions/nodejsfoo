
var express = require('express'),
    stocksCtrl = require('./stocks.ctrl');

var router = express.Router();

router.get('/', function(req, res, next) {
    stocksCtrl.getStocks(function(err, stocks) {
        if (err) {
            return next(err);
        }
        res.json(stocks);
    });
});

router.get('/:id', function(req, res, next) {
    stocksCtrl.getStock(req.params.id, function(err, stock) {
        if (err) {
            return next(err);
        }
        if (!stock) {
            return next({msg: "Stock not found"})
        }
        res.json(stock);
    });
});

module.exports = function(app) {
    app.use('/stocks', router);
};



