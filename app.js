var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var product=require('./routes/product_route');
var updatecat=require('./routes/update_cat');
var productUpdatewithoutimg=require('./routes/productUpdatewithoutimg');
var similar=require('./routes/similarpro_route');
var vegGrocery=require('./routes/vegGrocery_route');
var category=require('./routes/cat_route');
var bill=require('./routes/bill_route');
var billdetail=require('./routes/billdetail_route');
var addpro=require('./routes/addpro');
var login=require('./routes/login_route');
var order=require('./routes/order_route');
var orderdetail=require('./routes/suborder_route');
var deleteallcat=require('./routes/deleteAllcat');
var mail=require('./routes/mail_route');
var profile=require('./routes/viewprofile');
var forget=require('./routes/forgetpswd');
var supplier=require('./routes/supplier_route');
var supplierbycat=require('./routes/supplierwithcat');
var changepswd=require('./routes/changepswd');
var reminder=require('./routes/productreminder');
var productsearch=require('./routes/productsearch');
var deleteandgetAllpro=require('./routes/deleteandgetAllpro');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/product',product);
app.use('/updatecat',updatecat);
app.use('/category',category);
app.use('/similar',similar);
app.use('/addpro',addpro);
app.use('/productUpdatewithoutimg',productUpdatewithoutimg);
app.use('/bill',bill);
app.use('/login',login);
app.use('/order',order);
app.use('/orderdetail',orderdetail);
app.use('/billdetail',billdetail);
app.use('/vegGrocery',vegGrocery);
app.use('/deleteallcat',deleteallcat);
app.use('/productsearch',productsearch);
app.use('/mail',mail);
app.use('/forget',forget);
app.use('/supplier',supplier);
app.use('/supplierbycat',supplierbycat);
app.use('/changepswd',changepswd);
app.use('/profile',profile);
app.use('/reminder',reminder);
app.use('/deleteandgetAllpro',deleteandgetAllpro);
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

module.exports = app;
