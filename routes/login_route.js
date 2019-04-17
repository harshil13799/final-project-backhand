var login = require('../models/login_model')
var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    
      login.getAllUserById(req.body,function(err,rows){
        if (err) {
          res.json(err);
        }
        else {
          res.json(rows);
        }
  
      });
});
router.get('/', function (req, res, next) {
  login.getAllUser(function (err, rows) {
      
          if (err) {
            res.json(err);
          }
          else {
            res.json(rows);
          }
      
      });
      
  });
  
module.exports = router;