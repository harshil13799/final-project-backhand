var db=require('../database');

var product={

getAllproduct:function(callback){
    return db.query('select * from product_tbl',callback);
},
getallproById:function(p_id,callback){
    return db.query('select * from product_tbl where p_id=?',[p_id],callback)
},
getallveg:function(cat_name,callback){
     return db.query('select c.*,p.* from product_tbl p,cat_tbl c where c.cat_id=p.fk_cat_id and c.cat_name=?',[cat_name],callback)
 },
 similarProduct:function(fk_cat_id,p_id,callback){
     return db.query('select * from product_tbl where fk_cat_id=? and p_id NOT IN (?)',[fk_cat_id,p_id],callback);
 },
 
updateProductwithoutimg:function(p_id,item,callback){

 return db.query('update product_tbl set p_name=?,p_price=?,p_qty=?,p_mfxg=?,buffer_stock=? where p_id=?',[item.p_name,item.p_price,item.p_qty,item.p_mfg,item.buffer_stock,p_id],callback)
},
 updateProduct:function(item,filename,callback){
        console.log(item,filename)
     return db.query('update product_tbl set p_name=?,p_price=?,p_qty=?,p_mfg=?,p_img=?,buffer_stock=? where p_id=?',[item.p_name,item.p_price,item.p_qty,item.p_mfg,filename,item.buffer_stock,item.p_id],callback)
 },
 deleteproduct:function(p_id,callback){
     return db.query('delete from product_tbl where p_id=?',[p_id],callback)
 },
 addproduct:function(item,filename,callback){
     console.log(item.filename)
     return db.query('insert into product_tbl (p_name,p_price,p_qty,fk_cat_id,p_mfg,p_img,buffer_stock,fk_s_id) values (?,?,?,?,?,?,?,?)',[item.p_name,item.p_price,item.p_qty,item.fk_cat_id,item.p_mfg,filename,item.buffer_stock,item.fk_s_id],callback);
 },
 getalldataprocat:function(callback){
    return db.query('select c.*,p.* from product_tbl p,cat_tbl c where c.cat_id=p.fk_cat_id',callback)
},
getallproBycat:function(cat_name,callback){
    return db.query('select c.*,p.* from product_tbl p,cat_tbl c where c.cat_id=p.fk_cat_id and c.cat_name=?',[cat_name],callback);
},

 deleteAllpro:function(item,callback){
    var delarr=[];
    for(i=0;i<item.length;i++){
        delarr[i]=item[i].p_id;
    }
    return db.query('delete from product_tbl where p_id in (?)',[delarr],callback)
},
getAllproductByAscorder:function(callback){
    return db.query('SELECT * FROM product_tbl ORDER BY p_name ASC',callback);
},


}
module.exports=product;