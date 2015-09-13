
var express = require('express'),
    bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

require('./stocks.routes')(app);
require('./user.routes')(app);

app.listen(9000, function() {
    console.log('Please navigate to http://localhost:9000');
});
