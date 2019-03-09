var order = require('../models/order_model')
var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    order.addorder(req.body, function (err, rows) { 
        if (err) {
          res.json(err);
        }
        else {
          res.json(rows);
        }
    });
});
router.get('/:fk_email_id',function (req, res, next) {
    
    order.getOrder(req.params.fk_email_id,function(err,rows){
        if (err) {
          res.json(err);
        }
        else {
          res.json(rows);
        }
  
      });
});
router.get('/',function (req, res, next) {
  
  order.getallOrder(function(err,rows){
      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }

    });
});

router.put('/:o_id', function (req, res, next) {
  order.updateorder(req.params.o_id, req.body, function (err, rows) {

   if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }


 });
});

module.exports = router;