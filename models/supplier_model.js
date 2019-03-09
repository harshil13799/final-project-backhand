var db=require('../database');

var supplier={

getAllsupplier:function(callback){
    return db.query('select * from supplier_tbl',callback);
},
getallsupplierById:function(s_id,callback){
    return db.query('select * from supplier_tbl where s_id=?',[s_id],callback)
},
addsupplier:function(item,callback){
     return db.query('insert into supplier_tbl (s_name,s_mno,s_address,fk_cat_id,s_id,fk_p_id) values(?,?,?,?,?,?)',[item.s_name,item.s_mno,item.s_address,item.fk_cat_id,item.s_id,item.fk_p_id],callback);
},
getallsupplierByCat:function(cat_name,callback){
    return db.query('select c.*,p.* from supplier_tbl p,cat_tbl c where c.cat_id=p.fk_cat_id and c.cat_name=?',[cat_name],callback)
},
getallsupplierByCat:function(cat_name,callback){
    return db.query('select c.*,p.* from supplier_tbl p,cat_tbl c where c.cat_id=p.fk_cat_id and c.cat_name=?',[cat_name],callback)
},
deletesupplier:function(s_id,callback){
         return db.query('delete from supplier_tbl where s_id=?',[s_id],callback)
},
updatesupplier:function(s_id,item,callback){
    return db.query('update supplier_tbl set s_name=?,s_mno=?,s_address=? where s_id=?',[item.s_name,item.s_mno,item.s_address,s_id],callback)
},
deleteAllsupplier:function(item,callback){
    var delarr=[];
    for(i=0;i<item.length;i++){
        delarr[i]=item[i].cat_id;
    }
    return db.query('delete from supplier_tbl where s_id in (?)',[delarr],callback)
},
getallsupplierwithProname:function(callback)
{
    return db.query('select p.*,s.*,c.* from product_tbl p,supplier_tbl s,cat_tbl c where s.fk_p_id=p.p_id and s.fk_cat_id=c.cat_id',callback);
},
getallsupplierpro:function(cat_id,callback){
    return db.query('select c.*,p.* from product_tbl p,cat_tbl c where c.cat_id=p.fk_cat_id and c.cat_id=?',[cat_id],callback)
},
}
module.exports=supplier;