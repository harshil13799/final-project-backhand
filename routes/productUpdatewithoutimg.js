var product = require('../models/product_model')
var express = require('express');
var router = express.Router();

router.put('/', function (req, res, next) {
  product.updateProductwithoutimg(req.body, function (err, rows) {

   if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }


 });
});
module.exports = router;