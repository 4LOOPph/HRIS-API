'use strict';

var mysql = require('mysql');
var Database = require('./../../app/utils/database').Database;
var db = new Database();

exports.addEmployee = function(data, next) {

    //===================== inserting employee in employees table =================//
    var str = mysql.format('INSERT into employees(e_idno, device_no, e_ssno, e_gsisno, e_pagibigno, e_philhealthno, e_tinno, e_fname, e_lname, e_mname, e_suffix, e_birthdate, e_gender, e_civil_status, e_dateemployed, DeptID, e_provincialadd, Perhomeadd, e_email, e_mobile_number, e_dateadded)' +
        'values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, (SELECT NOW()));',
    [data.e_idno, data.e_idno, data.e_ssno, data.e_gsisno, data.e_pagibigno, data.e_philhealthno, data.e_tinno, data.e_fname, data.e_lname, data.e_mname, data.e_suffix, data.e_birthdate, data.e_gender, data.e_civil_status, data.e_dateemployed, data.DeptID, data.e_provincialadd, data.Perhomeadd, data.e_email, data.e_mobile_number]);
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        next(null, response);
    });

    //====================== inserting employees in employment_status table ====================//
    var str = mysql.format('INSERT into employment_status(StatusID, Status) values((Select max(e_id) from employees), ?);', [data.Status]);
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        next(null, response);
    });

    var str = mysql.format('INSERT into divisions(div_id, div_name) values((Select max(e_id) from employees), ?);', [data.div_name]);
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        next(null, response);
    });

    //=======================================making job code=============================//
    var string = data.jt_name;
    var matches = string.match(/\b(\w)/g);
    var acronym = matches.join('');

    var str = mysql.format('INSERT into job_titles(jt_id, jt_name, jt_code) values((Select max(e_id) from employees), ?, ?);', [data.jt_name, acronym]);
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        next(null, response);
    });

    var str = mysql.format('INSERT into employee_family_background(FGID, EmergencyContactPerson, EmergencyTelNo) values((Select max(e_id) from employees), ?, ?);', [data.EmergencyContactPerson, data.EmergencyTelNo]);
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        next(null, response);
    });


    var str = mysql.format('INSERT into departments(d_id) values((Select max(e_id) from employees));');
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        next(null, response);
    });
};

exports.addProfilePic = function(device_no, file, next) {
    var str = mysql.format('UPDATE employees set Photo = ? WHERE e_idno = ?;', [file, device_no]);
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        console.log('response', response);
        next(null, response);
    });
};

exports.showEmployees = function(next) {
    //////////////////////////////////insert to division table to compliment with others 
    var str = mysql.format('SELECT e.device_no AS "Employee ID", CONCAT(e.e_lname, ", ", e.e_fname," ", LEFT(e.e_mname, 1),".",e.e_suffix,"  " ) AS Name, j.jt_name AS "Job Title", d.d_name AS "Department", s.Status AS "Status" FROM employees e, job_titles j, departments d, employment_status s where e.e_id = j.jt_id and e.e_id = d.d_id and e.e_id = s.StatusID order by e.e_lname;');
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        console.log('response', response);
        next(null, response);
    });
};

exports.showSpecificEmployee = function(e_idno, next) {
    var str = mysql.format('SELECT e.device_no AS "Employee ID", CONCAT(e.e_lname, ", ", e.e_fname," ", LEFT(e.e_mname, 1),".",e.e_suffix,"  " ) AS Name, j.jt_name AS "Job Title", d.d_name AS "Department", s.Status AS "Status" FROM employees e, job_titles j, departments d, employment_status s where e.e_lname like ?"%" and e.e_id = j.jt_id and e.e_id = d.d_id and e.e_id = s.StatusID or e.e_idno = ? and e.e_id = j.jt_id and e.e_id = d.d_id and e.e_id = s.StatusID;', [e_idno, e_idno]);
    //console.log("sdvs ". str)
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }        
        next(null, response);
    });
};

exports.getProfilePicture = function(device_no, next) {
    var str = mysql.format('SELECT Photo from employees where device_no = ?', [device_no]);
    //console.log("sdvs " + str)
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        console.log('sacaca', response)
         var buffer = new Buffer( response );
         var bufferBase64 = buffer.toString('base64');
        //console.log('xSSXxsx', bufferBase64);
        next(null, bufferBase64);
    });
};

exports.editEmployee = function([e_idno, data], next) {
    
    //===================== updating employee in employees table =================//
    var str = mysql.format('UPDATE employees SET e_idno = ?, device_no = ?, e_ssno = ?, e_gsisno = ?, e_pagibigno = ?, e_philhealthno = ?, e_tinno = ?, e_fname = ?, e_lname = ?, e_mname = ?, e_suffix = ?, e_birthdate = ?, e_gender = ?, e_civil_status = ?, e_dateemployed = ?, DeptID = ?, e_provincialadd = ?, Perhomeadd = ?, e_email = ?, e_mobile_number = ?, e_datemodified = (SELECT NOW()) WHERE e_idno = ?;',
    [data.e_idno, data.e_idno, data.e_ssno, data.e_gsisno, data.e_pagibigno, data.e_philhealthno, data.e_tinno, data.e_fname, data.e_lname, data.e_mname, data.e_suffix, data.e_birthdate, data.e_gender, data.e_civil_status, data.e_dateemployed, data.DeptID, data.e_provincialadd, data.Perhomeadd, data.e_email, data.e_mobile_number, e_idno]);
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        next(null, response);
    });

    //===============================getting id to compliment to other tables ===================//
    var str = mysql.format('select e_id from employees where e_idno =?', [e_idno]);
        db.query(str, function(err, rows){
            if(err) {
                throw err;
            } else {
                setValue(rows);
            }
        });

        function setValue(value) {
            //==========================update to divisions table=============//
            var str = mysql.format('UPDATE divisions SET div_name = ? WHERE div_id = ?;', [data.div_name, value[0].e_id]);
            db.query(str, function(err, response){
                if(err) {
                    next(err, null);
                }
                next(null, response);
            });

            //=======================================making job code=============================//
            var string = data.jt_name;
            var matches = string.match(/\b(\w)/g);
            var acronym = matches.join('');

            //==========================update to job_titles table=============//
            var str = mysql.format('UPDATE job_titles SET jt_name = ?, jt_code = ?, jt_datemodified = (select now()) WHERE jt_id = ?;', [data.jt_name, acronym, value[0].e_id]);
            db.query(str, function(err, response){
                if(err) {
                    next(err, null);
                }
                next(null, response);
            });

            //==========================update to employee_family_background table=============//
            var str = mysql.format('UPDATE employee_family_background SET EmergencyContactPerson = ?, EmergencyTelNo = ? WHERE FGID = ?;', [data.EmergencyContactPerson, data.EmergencyTelNo, value[0].e_id]);
            db.query(str, function(err, response){
                if(err) {
                    next(err, null);
                }
                next(null, response);
            });

            //====================== updating employees in employment_status table ====================//
            var str = mysql.format('UPDATE employment_status SET Status = ?, LastDateModified = (select now()) WHERE StatusID = ?;', [data.Status, value[0].e_id]);
            db.query(str, function(err, response){
                if(err) {
                    next(err, null);
                }
                next(null, response);
            });
        }

};
