
var express = require('express'),
    bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
    console.log('Request to ', req.url, ' at ', new Date());
    next();
});

require('./stocks.routes')(app);
require('./user.routes')(app);

app.use(function(err, req, res, next) {
    console.error('ERROR HAPPENED FOR ', req.url, err);
    res.status(500);

    res.json({msg: err.msg || "Sorry, our servers are acting up!!"})
});

app.listen(9000, function() {
    console.log('Please navigate to http://localhost:9000');
});
