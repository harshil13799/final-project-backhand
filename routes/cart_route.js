var cart = require('../models/cart_model')
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
cart.getAllcart(function (err, rows) {
    
        if (err) {
          res.json(err);
        }
        else {
          res.json(rows);
        }
    
    });
    
});
  
 router.get('/:fk_email_id', function (req, res, next) {
   cart.getallcartById(req.params.fk_email_id, function (err, rows) { 
       if (err) {
         res.json(err);
       }
       else {
         res.json(rows);
       }
   });
 });
 router.post('/', function (req, res, next) {
    cart.addcart(req.body, function (err, rows) {
  
      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
});
router.post('/:c_id', function (req, res, next) {
    cart.deletecart(req.params.c_id, function (err, rows) { 
        if (err) {
          res.json(err);
        }
        else {
          res.json(rows);
        }
    });
});
router.put('/', function (req, res, next) {
  cart.updatecart(req.body, function (err, rows) {

   if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }


 });
});

module.exports = router;