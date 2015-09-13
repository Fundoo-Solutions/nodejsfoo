
var express = require('express');

var router = express.Router();

router.post('/register', function(req, res) {
    console.log('Register called with ', req.body);
    setTimeout(function() {
        res.json({msg: "Success"});
    }, 2000);

});

module.exports = function(app) {
    app.use('/user', router);
};

