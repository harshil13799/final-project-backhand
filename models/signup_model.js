var db=require('../database');


var signup={
    adduser:function(item,callback){
        var type="user";
        return db.query('insert into information_tbl (email_id,password,u_name,u_gender,u_address,u_city,u_mno,u_type) values (?,?,?,?,?,?,?,?)',[item.email_id,item.password,item.u_name,item.u_gender,item.u_address,item.u_city,item.u_mno,type],callback);
    },
    getalluser:function(callback){
        return db.query('Select * from information_tbl',callback)
    },
}
module.exports=signup;
