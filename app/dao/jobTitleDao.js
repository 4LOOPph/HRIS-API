'use strict';

var mysql = require('mysql');
var Database = require('./../../app/utils/database').Database;
var db = new Database();

exports.createJobTitle = function(data, next) {
	var string = data.jt_name;
    var matches = string.match(/\b(\w)/g);
    var acronym = matches.join('');
    var str = mysql.format('Insert into job_titles(jt_name, jt_addedby, jt_dateadded, jt_code, jt_shortname, jt_desc, jt_classid, jt_groupid, inactive)'+
    	'values (?, ?, (select now()), ?, ?, ?, ?, ?, ?);',[data.jt_name, data.jt_addedby, acronym, data.jt_shortname, data.jt_desc, data.jt_classid, data.jt_groupid, data.inactive]);
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        next(null, response);
    });
};

exports.showjobTitles = function(next) {
    var str = mysql.format('Select jt_name AS "Job Title", jt_code AS "Job Title Code", inactive AS "Inactive" from job_titles');
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        next(null, response);
    });
};

exports.JobTitleName = function(next) {
    var str = mysql.format('Select jt_name AS "Job Title" from job_titles');
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        next(null, response);
    });
};

exports.editJobTitle = function(data, jt_id, next) {
	var string = data.jt_name;
    var matches = string.match(/\b(\w)/g);
    var acronym = matches.join('');
    var str = mysql.format('UPDATE job_titles SET jt_name = ?, jt_datemodified = (Select NOW()), jt_code = ?, jt_shortname = ?, jt_desc = ?, jt_classid = ?, jt_groupid = ?, inactive = ? where jt_id = ?', 
    	[data.jt_name, acronym, data.jt_shortname, data.jt_desc, data.jt_classid, data.jt_groupid, data.inactive, jt_id]);
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        next(null, response);
    });
};

exports.deleteJobTitle = function(jt_id, next) {
    var str = mysql.format('delete from job_titles where jt_id = ?', [jt_id]);
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        next(null, response);
    });
};

exports.showSpecificJobTitle = function(jt_name, next) {
    var str = mysql.format('Select jt_name AS "Job Title", jt_code AS "Job Title Code", inactive AS "Inactive" from job_titles WHERE jt_name like lower("%"?"%") or jt_id = ?', [jt_name, jt_name, jt_name]);
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        next(null, response);
    });
};
