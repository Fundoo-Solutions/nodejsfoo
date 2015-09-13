
var fs = require('fs');

module.exports = {
    getStocks: function(cb) {
        fs.readFile('step5/stocks.json', 'UTF-8', function(err, data) {
            if (err) {
                cb(err);
            } else {
                var stocks = JSON.parse(data);
                cb(null, stocks);
            }
        });
    }
};