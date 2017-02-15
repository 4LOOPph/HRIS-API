'use strict';


var mysql = require('mysql');
var Database = require('./../../app/utils/database').Database;
var db = new Database();

exports.getPerson = function(sub_id, next) {
    var str = mysql.format('UPDATE generated_keys SET gk_secretKeys = ? WHERE sub_id=?', [
        gksecretKey, sub_id
    ]);
    db.actionQuery(str, next);
};
