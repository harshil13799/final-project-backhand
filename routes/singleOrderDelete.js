var singleorder = require('../models/order_model')
var express = require('express');
var router = express.Router();


router.post('/:o_id', function (req, res, next) {
    singleorder.orderdelete(req.params.o_id, function (err, rows) { 
        if (err) {
          res.json(err);
        }
        else {
          res.json(rows);
        }
    });
  });
module.exports = router;