
var express = require('express');

var router = express.Router();

router.post('/register', function(req, res, next) {
    if (!req.body.username || !req.body.password) {
        return next({status: 400, msg: "Invalid username and/or password!"});
    }
    console.log('Register called with ', req.body);
    setTimeout(function() {
        res.json({msg: "Success"});
    }, 2000);

});

module.exports = function(app) {
    app.use('/user', router);
};

