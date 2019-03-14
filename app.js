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
var cart=require('./routes/cart_route');
var deleteallcart=require('./routes/deleteallcart');
var bill=require('./routes/bill_route');
var billdetail=require('./routes/billdetail_route');
var addpro=require('./routes/addpro');
var login=require('./routes/login_route');
var order=require('./routes/order_route');
var topfive=require('./routes/topfiveorder');
var deleteorder=require('./routes/deleteOrder');
var singleorderdelete=require('./routes/singleOrderDelete');
var orderdetail=require('./routes/suborder_route');
var updateorder=require('./routes/updateorder_route');
var updateorderafterorder=require('./routes/productupdateafterorder');
var deleteallcat=require('./routes/deleteAllcat');
var mail=require('./routes/mail_route');
var profile=require('./routes/viewprofile');
var forget=require('./routes/forgetpswd');
var supplier=require('./routes/supplier_route');
var productsearch=require('./routes/productsearch');
var supplierbycat=require('./routes/supplierwithcat');
var changepswd=require('./routes/changepswd');
var signup=require('./routes/signup_route');
var reminder=require('./routes/productreminder');

var sort=require('./routes/sort');
var search=require('./routes/searchpro_route');
var searchprobycat=require('./routes/searchprobycat');
var pastorder=require('./routes/past_order_route');
var pastorderdetail=require('./routes/past_order_detail_route');
var deleteandgetAllpro=require('./routes/deleteandgetAllpro');
var supplierpro=require('./routes/supplierProductName_route');
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
app.use('/cart',cart);
app.use('/deleteallcart',deleteallcart);
app.use('/similar',similar);
app.use('/addpro',addpro);
app.use('/signup',signup);
app.use('/productUpdatewithoutimg',productUpdatewithoutimg);
app.use('/bill',bill);
app.use('/login',login);
app.use('/order',order);
app.use('/updateorder',updateorder);
app.use('/updateorderafterorder',updateorderafterorder);
app.use('/topfive',topfive);
app.use('/deleteorder',deleteorder);
app.use('/orderdetail',orderdetail);
app.use('/billdetail',billdetail);
app.use('/vegGrocery',vegGrocery);
app.use('/deleteallcat',deleteallcat);
app.use('/productsearch',productsearch);
app.use('/mail',mail);
app.use('/sort',sort);
app.use('/forget',forget);
app.use('/supplier',supplier);
app.use('/supplierbycat',supplierbycat);
app.use('/changepswd',changepswd);
app.use('/singleorderdelete',singleorderdelete);
app.use('/profile',profile);
app.use('/reminder',reminder);
app.use('/supplierpro',supplierpro);
app.use('/pastorder',pastorder);
app.use('/searchprobycat',searchprobycat);
app.use('/search',search);
app.use('/pastorderdetail',pastorderdetail);
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
