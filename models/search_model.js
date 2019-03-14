var db=require('../database');

var searchpro={

getsearchproduct:function(word,callback){
    var name='%'+word+'%';
    return db.query('select * from product_tbl where p_name like ?',[name],callback);
},
getsearchproductblank:function(callback){
    return db.query('select * from product_tbl where p_name like "%%"',callback);
},

getallproBycat:function(cat_name,word,callback){
    var name='%'+word+'%';
    return db.query('select c.*,p.* from product_tbl p,cat_tbl c where c.cat_id=p.fk_cat_id and c.cat_name=? and p_name like ?',[cat_name,word],callback);
},
getsearchprobycatblank:function(cat_name,callback){
    return db.query('select c.*,p.* from product_tbl p,cat_tbl c where c.cat_id=p.fk_cat_id and c.cat_name=? and p_name like "%%"',[cat_name],callback);
}

}
module.exports=searchpro;