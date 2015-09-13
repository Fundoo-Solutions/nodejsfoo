
var mongoose = require('mongoose');

var StockSchema = new mongoose.Schema({
    name: String,
    id: {type: String, required: true},
    price: Number,
    previous: Number
});

var StockModel = mongoose.model('Stock', StockSchema);

module.exports = {
    StockModel: StockModel
};