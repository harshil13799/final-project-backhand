var pastorder = require('../models/pastorder_model')
var express = require('express');
var router = express.Router();
   router.get('/:fk_bill_id?', function (req, res, next) {
    pastorder.getallpastbillDetail(req.params.fk_bill_id,function (err, rows) {
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