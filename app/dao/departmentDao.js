'use strict';

var mysql = require('mysql');
var Database = require('./../../app/utils/database').Database;
var db = new Database();

exports.createDepartment = function(data, next) {
    var str = mysql.format('Insert into departments(d_name, d_dateadded,  d_code, short_name, branch_id, d_desc, inactive)'+
    	'values (?, (SELECT NOW()), ?, ?, (SELECT max(ci_id) from company_info), ?, ?);',[data.d_name, data.d_code, data.short_name, data.d_desc, data.inactive]);
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        next(null, response);
    });
};

exports.showDepartment = function(next) {
    var str = mysql.format('SELECT * from departments');
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        next(null, response);
    });
};

exports.editDepartment = function(d_id, data, next) {
    var str = mysql.format('UPDATE departments SET d_name = ?, d_datemodified = (SELECT NOW()), d_code = ?, short_name = ?, d_desc = ?, inactive = ? WHERE d_id = ?', 
        [data.d_name, data.d_code, data.short_name, data.d_desc, data.inactive, d_id]);
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        next(null, response);
    });
};

exports.deleteDepartment = function(d_id,  next) {
    var str = mysql.format('DELETE FROM departments where d_id = ?', 
        [d_id]);
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        next(null, response);
    });
};

exports.showSpecificDepartment = function(d_name, next) {
    var str = mysql.format('SELECT * from departments where d_name like lower(?"%")', [d_name]);
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        next(null, response);
    });
};