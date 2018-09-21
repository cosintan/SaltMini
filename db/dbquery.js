var mysql= require('mysql');
var db={};
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root0918',
    database : 'SALTMINI'
  });
//addMethod
function addMethod(object, name, fn) {
　　var old = object[name];
　　object[name] = function() {
        //arguments.length主要是可以对输入的参数进行跟踪，存储外部调用时实参的个数，arguments属于当前最小函数---可能跟闭包有关系.
        //fn.length存储函数定义时形参的个数
　　　　if(fn.length === arguments.length) {
　　　　　　return fn.apply(this, arguments);
　　　　} else if(typeof old === "function") {
　　　　　　return old.apply(this, arguments);
　　　  }
　  }
}    
addMethod(db, "query", function(querystr,func) {
    connection.connect(function(err){
        if(err){
        console.log(err);
        return ;
        }
    });
    console.log(querystr);
    var sql=querystr;
    if(!sql) return;
    connection.query(sql,function(err,rows,fields){
        if(err){
            console.log(err);
            return;
        }
        func(rows);          
      });
      connection.end(function(err){
          if(err){
              return;
          }else{
              console.log('sql connection close.')
          }
      });
});
//新增修改数据
addMethod(people, "query", function(querystr,paradatas,func) {
    connection.connect(function(err){
        if(err){
        console.log(err);
        return ;
        }
    });
    console.log(querystr);
    var sql=querystr;
    if(!sql) return;
    connection.query(sql,paradatas,function(err,result,fields){
        if(err){
            console.log(err);
            return;
        }        
        console.log(`MODIFY SUCCESS `+ result.affectedRows);         
      });
      connection.end(function(err){
          if(err){
              return;
          }else{
              console.log('sql connection close.')
          }
      });    
});