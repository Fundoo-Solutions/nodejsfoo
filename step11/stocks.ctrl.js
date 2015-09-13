
var fs = require('fs'),
    async = require('async');

module.exports = {
    getStocks: function(cb) {
        async.parallel([
            function(done) {
                fs.readFile('step7/goog.json', done);
            },
            function(done) {
                fs.readFile('step7/fb.json', done);
            },
            function(done) {
                fs.readFile('step7/twtr.json', done);
            }
        ], function(err, data) {
            if (err) {
                cb(err);
            } else {
                for (var i = 0; i < data.length; i++) {
                    data[i] = JSON.parse(data[i]);
                }
                cb(null, data);
            }
        });
    }
};