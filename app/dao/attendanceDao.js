'use strict';

var mysql = require('mysql');
var Database = require('./../../app/utils/database').Database;
var db = new Database();
var async = require('async');

exports.attendance = function(e_idno, next) {

    var str = mysql.format('Insert into time_logs(EmployeeID, TimeLog, LogDate, LogTime, LogType, device_no, MACID)' +
        'values (?, (SELECT NOW()), (SELECT DATE_FORMAT(NOW(), "%Y-%m-%d")), (SELECT DATE_FORMAT(NOW(), "%h:%i:%s %p")), 0, ?, 001);', [e_idno, e_idno]);
    db.query(str, function(err, response) {
        if (err) {
            next(err, null);
        }
        next(null, response);
    });

};

exports.showDTR = function(EmployeeID, query_data, next) {
    var str = mysql.format('SELECT distinct PayrollID, Day, TimeIn, TimeOut, Totalhrs, IsLate, IsUnderTime, TimeIn2, TimeOut2 from time_keeping where EmployeeID = ? and PayrollID = ? order by TimeIn;', [EmployeeID, query_data.PayrollID]);
    db.query(str, function(err, response) {
        if (err) {
            next(err, null);
        }
        next(null, response);
    });

};
