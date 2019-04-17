var product = require('../models/product_model')
var express = require('express');
var router = express.Router();

router.get('/:p_price', function (req, res, next) {
product.getAllfilterbyrange(req.params.p_price,function (err, rows) {
    
        if (err) {
          res.json(err);
        }
        else {
          res.json(rows);
        }
    
    });
    
});
module.exports = router;