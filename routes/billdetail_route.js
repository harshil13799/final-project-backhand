var billdetail= require('../models/billdetail_model')
var express = require('express');
var router = express.Router();
router.post('/', function (req, res, next) {
    billdetail.addbillsum(req.body, function (err, rows) {
  
      if (err) {
        res.json(err);
      }
      else {
          
        res.json(rows);
      }
    });
   });
  router.get('/:fk_bill_id?', function (req, res, next) {
  billdetail.getallpastbillDetail(req.params.fk_bill_id,function (err, rows) {
        if (err) {
              res.json(err);
        }
        else {
            console.log(rows.insertid)
               res.json(rows);
            }
         });
           
         });
  module.exports = router;