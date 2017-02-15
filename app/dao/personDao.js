'use strict';


var mysql = require('mysql');
var Database = require('./../../app/utils/database').Database;
var db = new Database();


exports.getPerson = function(next) {
    var str = mysql.format('SELECT * FROM users;');
    db.query(str, function(err, response){
    	if(err) {
    		next(err, null);
    	}
    	console.log('response', response);
    	next(null, response);
    });
};


//insert person
exports.createPerson = function(data, next) {
    var str = mysql.format('INSERT into users(name, password) values(?,?);', [data.name, data.password]);
    db.query(str, function(err, response){
    	if(err) {
    		next(err, null);
    	}
    	console.log('response', response);
    	next(null, response);
    });
};


//select specific person
exports.getSpecificPerson = function(user_id, next) {
    var str = mysql.format('SELECT * FROM users where user_id=?;', [user_id]);
    db.query(str, function(err, response){
    	if(err) {
    		next(err, null);
    	}
    	
    	next(null, response);
    });
};


//update person
exports.updatePerson = function([user_id,data], next) {
    var str = mysql.format('UPDATE users SET name = ? where user_id=?;', [data.name, user_id]);
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        
        next(null, response);
    });
};

//delete users
exports.deletePerson = function(user_id, next) {
    var str = mysql.format('DELETE FROM users WHERE user_id=?;', [user_id]);
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        
        next(null, response);
    });
};