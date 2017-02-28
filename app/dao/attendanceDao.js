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

exports.timeKeep = function(e_idno, next) {
    //var row;
    async.waterfall([
        function(callback){
            var strp = mysql.format('SELECT ScheduleID FROM employees where e_idno = ?', [e_idno]);
            db.query(strp, function(err, ScheduleID) {
                if (err) {
                    callback(err, null);
                }
                ScheduleID = ScheduleID[0];
                ScheduleID = ScheduleID[Object.keys(ScheduleID)[0]];
                console.log(ScheduleID)
                callback(null, ScheduleID);
            });
        },
        function(ScheduleID, callback){
            var stri = mysql.format('SELECT * from time_schedule where SchedID = ?', [ScheduleID]);
            db.query(stri, function(err, row) {
                if (err) {
                    callback(err, null);
                }
                row = row[0];
                callback(null, row);
            });
        }
    ], next);
};
