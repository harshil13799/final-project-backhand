var product = require('../models/product_model')
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
product.getAllproductByAscorder(function (err, rows) {
    
        if (err) {
          res.json(err);
        }
        else {
          res.json(rows);
        }
    
    });
    
});
router.get('/:fk_cat_id/:p_price', function (req, res, next) {
  product.getAllfilterpro(req.params.fk_cat_id,req.params.p_price,function (err, rows) {
      
          if (err) {
            res.json(err);
          }
          else {
            res.json(rows);
          }
      
      });
      
  });
  
module.exports = router;