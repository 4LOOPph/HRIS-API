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

exports.createTimeSchedule = function(data, next) {
    var str = mysql.format('INSERT INTO time_schedule(SchedID, IN01, OUT01, IN02, OUT02, IN03, OUT03, IN11, OUT11, IN12, OUT12, IN13, OUT13, IN21, OUT21, IN22, OUT22, IN23, OUT23, IN31, OUT31, IN32, OUT32, IN33, OUT33, IN41, OUT41, IN42, OUT42, IN43, OUT43, IN51, OUT51, IN52, OUT52, IN53, OUT53, IN61, OUT61, IN62, OUT62, IN63, OUT63)'+
        'values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);',
        [data.SchedID, data.SundayMornTimeIn, data.SundayMornTimeOut, data.SundayAftTimeIn, data.SundayAftTimeOut, data.SundayOTTimeIn, data.SundayOTTimeOut, data.MondayMornTimeIn, data.MondayMornTimeOut, data.MondayAftTimeIn, data.MondayAftTimeOut, data.MondayOTTimeIn, data.MondayOTTimeOut, data.TeusdayMornTimeIn, data.TeusdayMornTimeOut, data.TeusdayAftTimeIn, data.TeusdayAftTimeOut, data.TeusdayOTTimeIn, data.TeusdayOTTimeOut, data.WednesdayMornTimeIn, data.WednesdayMornTimeOut, data.WednesdayAftTimeIn, data.WednesdayAftTimeOut, data.WednesdayOTTimeIn, data.WednesdayOTTimeOut, data.ThursdayMornTimeIn, data.ThursdayMornTimeOut, data.ThursdayAftTimeIn, data.ThursdayAftTimeOut, data.ThursdayOTTimeIn, data.ThursdayOTTimeOut, data.FridayMornTimeIn, data.FridayMornTimeOut, data.FridayAftTimeIn, data.FridayAftTimeOut, data.FridayOTTimeIn, data.FridayOTTimeOut, data.SaturdayMornTimeIn, data.SaturdayMornTimeOut, data.SaturdayAftTimeIn, data.SaturdayAftTimeOut, data.SaturdayOTTimeIn, data.SaturdayOTTimeOut]);
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        next(null, response);
    });
};

exports.showWorkTimeSchedule = function(SchedID, next) {
    var str = mysql.format('select IN01, OUT01, IN02, OUT02, IN03, OUT03, IN11, OUT11, IN12, OUT12, IN13, OUT13, IN21, OUT21, IN22, OUT22, IN23, OUT23, IN31, OUT31, IN32, OUT32, IN33, OUT33, IN41, OUT41, IN42, OUT42, IN43, OUT43, IN51, OUT51, IN52, OUT52, IN53, OUT53, IN61, OUT61, IN62, OUT62, IN63, OUT63 from time_schedule where SchedID = ?;', [SchedID]);
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        next(null, response);  
    });
};