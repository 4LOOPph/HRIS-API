'use strict';

var mysql = require('mysql');
var Database = require('./../../app/utils/database').Database;
var db = new Database();

exports.createStatus = function(data, next) {
    var str = mysql.format('Insert into employment_status(StatusCode, Status, Description, Remarks, InActive, DateCreated)'+
    	'values (?, ?, ?, ?, ?, (select now()));',[data.StatusCode, data.Status, data.Description, data.Remarks, data.InActive]);
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        next(null, response);
    });
};

exports.showStatus = function(next) {
    var str = mysql.format('select * from employment_status;');
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        next(null, response);
    });
};

exports.showStatusNames = function(next) {
    var str = mysql.format('select Status from employment_status;');
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        next(null, response);
    });
};

exports.editStatus = function(StatusID, data, next) {
    var str = mysql.format('Update employment_status set StatusCode = ?, Status = ?, Description = ?, Remarks = ?, InActive = ?, LastDateModified = (select now()) where StatusID = ?;', 
        [data.StatusCode, data.Status, data.Description, data.Remarks, data.InActive, StatusID]);
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        next(null, response);
    });
};

exports.deleteStatus = function(StatusID, next) {
    var str = mysql.format('delete from employment_status where StatusID = ?;', [StatusID]);
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        next(null, response);
    });
};

exports.showSpecificEmploymentStatus = function(status, next) {
    var str = mysql.format('select * from employment_status where status like lower(?"%") or StatusID = ?;', [status, status]);
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        next(null, response);
    });
};