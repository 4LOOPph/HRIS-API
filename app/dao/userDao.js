'use strict';


var mysql = require('mysql');
var Database = require('./../../app/utils/database').Database;
var db = new Database();


exports.User_login = function(data, next) {
    
    var str = mysql.format('SELECT UserName, Password FROM users where UserName=? and Password=?;', [data.UserName, data.Password]);
        db.query(str, function(err, response){
    	if((data.UserName != str[0]) && data.Password != str[1]){
            //next(null, response);
        }else{
            next(response, null)
        }

        if(err) {
    		next(err, null);
    	}    	
    	
    });
};

