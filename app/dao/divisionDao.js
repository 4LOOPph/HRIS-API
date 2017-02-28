'use strict';

var mysql = require('mysql');
var Database = require('./../../app/utils/database').Database;
var db = new Database();

exports.createDivision = function(data, next) {
    var str = mysql.format('Insert into divisions(div_code, div_name, inactive)'+
    	'values (?, ?, ?);',[data.div_code, data.div_name, data.inactive]);
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        next(null, response);
    });
};

exports.showDivision = function(next) {
    var str = mysql.format('SELECT * from divisions');
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        next(null, response);
    });
};

exports.editDivision = function(div_id, data, next) {
    var str = mysql.format('UPDATE divisions SET div_code = ?, div_name = ?, inactive = ? where div_id = ?', 
        [data.div_code, data.div_name, data.inactive, div_id]);
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        next(null, response);
    });
};

exports.deleteDivision = function(div_id,  next) {
    var str = mysql.format('DELETE FROM divisions where div_id = ?', 
        [div_id]);
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        next(null, response);
    });
};

exports.showSpecificDivision = function(div_name, next) {
    var str = mysql.format('SELECT * from divisions where div_name like lower(?"%")',[div_name]);
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        next(null, response);
    });
};