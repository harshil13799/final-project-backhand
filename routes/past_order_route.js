var past = require('../models/pastorder_model')
var express = require('express');
var router = express.Router();

   router.get('/:user_id?', function (req, res, next) {
    past.getallpastbill(req.params.user_id,function (err, rows) {
        if (err) {
              res.json(err);
         }
        else
          {    
              res.json(rows);
          }
        
       });
     });
  module.exports = router;