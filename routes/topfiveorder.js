var topfive = require('../models/order_model')
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
topfive.topfiveorder(function (err, rows) {
    
        if (err) {
          res.json(err);
        }
        else {
          res.json(rows);
        }
    
    });
    
});

module.exports = router;