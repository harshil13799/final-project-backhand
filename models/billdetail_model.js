var db=require('../database');
var billdetail={
    
addbillsum:function(item,callback)
{
    console.log(item)
    var value=[];
    var d=new Date();
    for(let i=0;i<item.length;i++)
    {
        console.log(item[i].o_date);
        value[i]=[item[i].fk_bill_id,item[i].fk_p_id,item[i].price,item[i].qty,item[i].fk_email_id,d];
    }
    console.log(value);
    return db.query('insert into billdetail_tbl(fk_bill_id,fk_p_id,price,qty,fk_email_id,o_date) VALUES  ?',[value],callback);
},
getallbilldetail:function(callback)
{
    return db.query('select * from billdetail_tbl',callback)
},
getallpastbillDetail:function(fk_bill_id,callback)
{
    return db.query('select bd.*,d.* from billdetail_tbl bd,product_tbl d where bd.fk_p_id=d.p_id and fk_bill_id=?',[fk_bill_id],callback);
},
getallpastbillDetailbyemail:function(fk_email_id,callback)
{
    return db.query('select bd.*,d.* from billdetail_tbl bd,product_tbl d where bd.fk_p_id=d.p_id and fk_email_id=?',[fk_email_id],callback);
},

}
module.exports=billdetail;