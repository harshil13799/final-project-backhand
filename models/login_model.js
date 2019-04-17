var db=require('../database');

var login={
getAllUser:function(callback)
{
     return db.query('Select * from information_tbl',callback);
},
    
getAllUserById:function(item,callback)
{
    return db.query('Select * from information_tbl where email_id=? and password=?',[item.email_id,item.password],callback);
},
getAllUserByEmailId:function(email_id,callback){
    
    return db.query('Select * from information_tbl where email_id=?',[email_id],callback);
 },
updateUser:function(email_id,item,callback){
    return db.query('update information_tbl set password=?,u_name=?,u_gender=?,u_address=?,u_city=?,u_mno=? where email_id=?',[item.password,item.u_name,item.u_gender,item.u_address,item.u_city,item.u_mno,email_id],callback)
},
updatePassword:function(email_id,item,callback){
    return db.query('update information_tbl set password=? where email_id=?',[item.password,email_id],callback)
},
}
module.exports=login;