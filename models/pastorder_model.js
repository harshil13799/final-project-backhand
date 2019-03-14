var db=require('../database');

var past={

getallpastbill:function(user_id,callback)
{
        console.log(user_id);
    return db.query('select * from bill_tbl where fk_email_id=?',[user_id],callback);
},
getallpastbillDetail:function(fk_bill_id,callback)
{
        return db.query('select bd.*,d.* from billdetail_tbl bd,product_tbl d where bd.fk_p_id=d.p_id and fk_bill_id=?',[fk_bill_id],callback);   
}
}
module.exports=past;