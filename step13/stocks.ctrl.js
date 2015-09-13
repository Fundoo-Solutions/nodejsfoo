
var StockModel = require('./stocks.model').StockModel,
    async = require('async');

module.exports = {
    getStocks: function(cb) {
        StockModel.find({}, cb);
    },
    getStock: function(id, cb) {
        StockModel.findOne({id: id}, cb);
    }
};