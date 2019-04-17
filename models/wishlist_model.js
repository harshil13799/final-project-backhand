var db=require('../database');

var wishlist={

getAllwishlist:function(callback){
    return db.query('select * from wishlist_tbl',callback);
},
getallwishlistById:function(fk_email_id,callback){
    return db.query('select * from wishlist_tbl where fk_email_id=?',[fk_email_id],callback)
},
addintowishlist:function(item,callback){
     return db.query('insert into wishlist_tbl (fk_email_id,fk_p_id,fk_p_name,fk_p_img,fk_p_mfg,fk_cat_id,fk_p_price) values(?,?,?,?,?,?,?)',[item.fk_email_id,item.fk_p_id,item.fk_p_name,item.fk_p_img,item.fk_p_mfg,item.fk_cat_id,item.fk_p_price],callback);
},
deletefromwishlist:function(w_id,callback){
         return db.query('delete from wishlist_tbl where w_id=?',[w_id],callback)
},
deleteAllcart:function(item,callback){
    console.log(item);
    var delarr=[];
    for(i=0;i<item.length;i++){
        delarr[i]=item[i].fk_email_id;
    }
    return db.query('delete from wishlist_tbl where fk_email_id in (?)',[delarr],callback)
}
}
module.exports=wishlist;