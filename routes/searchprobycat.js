var search = require('../models/search_model')
var express = require('express');
var router = express.Router();


router.get('/:cat_name/:word', function (req, res, next) {
search.getsearchproduct(req.params.cat_name,req.params.word,function (err, rows) {
    
        if (err) {
          res.json(err);
        }
        else {
          res.json(rows);
        }
    
    });   
});
  
module.exports = router;