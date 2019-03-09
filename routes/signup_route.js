var signup = require('../models/signup_model')
var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    
      signup.adduser(req.body,function(err,rows){
        if (err) {
          res.json(err);
        }
        else {
          res.json(rows);
        }
  
      });
});
router.get('/',function (req, res, next) {
  
    signup.getalluser(function(err,rows){
        if (err) {
          res.json(err);
        }
        else {
          res.json(rows);
        }
  
      });
  });
  
module.exports = router;