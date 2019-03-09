var product = require('../models/product_model')
var express = require('express');
var router = express.Router();
var multer=require('multer');
var path=require('path');

 var storage = multer.diskStorage({
   destination: (req, file, cb) => {
   cb(null, 'public/images/product')
   },
   filename: (req, file, cb) => {
   x=file.fieldname + '-' + Date.now()+path.extname(file.originalname);
   cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
  }
   });
   var upload = multer({storage: storage});


router.get('/', function (req, res, next) {
product.getAllproduct(function (err, rows) {
    
        if (err) {
          res.json(err);
        }
        else {
          res.json(rows);
        }
    
    });
    
});
  
 router.get('/:p_id', function (req, res, next) {
   product.getallproById(req.params.p_id, function (err, rows) { 
       if (err) {
         res.json(err);
       }
       else {
         res.json(rows);
       }
   });
 });


 
router.post('/:p_id', function (req, res, next) {
  product.deleteproduct(req.params.p_id, function (err, rows) { 
      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
  });
});

router.put('/',upload.single('p_img'), function (req, res, next) {
  product.updateProduct(req.body,req.file.filename, function (err, rows) {

   if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }


 });
});
module.exports = router;