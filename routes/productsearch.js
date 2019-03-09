var product = require('../models/product_model')
var express = require('express');
var router = express.Router();

router.get('/:p_name', function (req, res, next) {
    product.getallproByName(req.params.p_name, function (err, rows) { 
        if (err) {
          res.json(err);
        }
        else {
          res.json(rows);
        }
    });
  });
  module.exports = router; 