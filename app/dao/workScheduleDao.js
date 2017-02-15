'use strict';

var mysql = require('mysql');
var Database = require('./../../app/utils/database').Database;
var db = new Database();

exports.showAllWorkSchedule = function(next) {
    var str = mysql.format('select Code, Template AS "Name", Description, Inactive from work_schedules;');
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        next(null, response);
    });
};

exports.createWorkSchedule = function(data, next) {
    var str = mysql.format('INSERT INTO work_schedules(Code, Template, Description, Inactive, DateCreated)'+
        'values(?, ?, ?, ?, (select now()));', [data.Code, data.Template, data.Description, data.Inactive]);
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        next(null, response);
    });
};

exports.editWorkSchedule = function(data, SchedID, next) {
    var str = mysql.format('UPDATE work_schedules SET Code = ?, Template = ?, Description = ?, Inactive = ?, DateModified = (SELECT NOW()) where SchedID = ?;',
        [data.Code, data.Template, data.Description, data.Inactive, SchedID]);
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        next(null, response);
    });
};

exports.deleteWorkSchedule = function(SchedID, next) {
    var str = mysql.format('DELETE FROM work_schedules where SchedID = ?;',
        [SchedID]);
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        next(null, response);
    });
};