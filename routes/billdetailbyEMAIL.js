var billdetail= require('../models/billdetail_model')
var express = require('express');
var router = express.Router();
  router.get('/:fk_email_id?', function (req, res, next) {
  billdetail.getallpastbillDetailbyemail(req.params.fk_email_id,function (err, rows) {
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