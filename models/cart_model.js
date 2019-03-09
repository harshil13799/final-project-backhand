var db=require('../database');

var cart={

getAllcart:function(callback){
    return db.query('select * from cart_tbl',callback);
},
getallcartById:function(fk_email_id,callback){
    return db.query('select * from cart_tbl where fk_email_id=?',[fk_email_id],callback)
},
addcart:function(item,callback){
    var qty=1;
     return db.query('insert into cart_tbl (fk_email_id,c_price,fk_p_id,fk_p_name,c_qty,fk_p_img,fk_p_mfg,fk_cat_id,fk_p_price,qty) values(?,?,?,?,?,?,?,?,?,?)',[item.fk_email_id,item.c_price,item.fk_p_id,item.fk_p_name,item.c_qty,item.fk_p_img,item.fk_p_mfg,item.fk_cat_id,item.fk_p_price,qty],callback);
},
deletecart:function(c_id,callback){
         return db.query('delete from cart_tbl where c_id=?',[c_id],callback)
},
updatecart:function(item,callback){
    console.log(item);
    return db.query('update cart_tbl set c_price=?,qty=? where c_id=?',[item.c_price,item.qty,item.c_id],callback)
},
deleteAllcart:function(item,callback){
    console.log(item);
    var delarr=[];
    for(i=0;i<item.length;i++){
        delarr[i]=item[i].fk_email_id;
    }
    return db.query('delete from cart_tbl where fk_email_id in (?)',[delarr],callback)
}
}
module.exports=cart;