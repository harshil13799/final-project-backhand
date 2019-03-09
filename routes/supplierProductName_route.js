var supplierproduct = require('../models/supplier_model')
var express = require('express');
var router = express.Router();

    
router.post('/', function (req, res, next) {
    deleteallpro.deleteAllpro(req.body, function (err, rows) { 
        if (err) {
          res.json(err);
        }
        else {
          res.json(rows);
        }
    });
});

router.get('/:cat_id', function (req, res, next) {
  supplierproduct.getallsupplierpro(req.params.cat_id, function (err, rows) { 
      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
  });
});

module.exports = router;