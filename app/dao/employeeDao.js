'use strict';

var mysql = require('mysql');
var Database = require('./../../app/utils/database').Database;
var db = new Database();
var async = require('async');

exports.addEmployee = function(data, next) {

    //===================== inserting employee in employees table =================//
    async.waterfall([
        function(callback) {
            var str = mysql.format('INSERT into employees(e_idno, device_no, e_ssno, e_gsisno, e_pagibigno, e_philhealthno, e_tinno, e_fname, e_lname, e_mname, e_suffix, e_birthdate, e_gender, e_civil_status, e_dateemployed, e_provincialadd, Perhomeadd, e_email, e_mobile_number, e_dateadded, s_id, jt_id)' +
                'values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, (SELECT NOW()), (SELECT StatusID from employment_status where Status = ?), (SELECT jt_id from job_titles where jt_name = ?));', [data.e_idno, data.e_idno, data.e_ssno, data.e_gsisno, data.e_pagibigno, data.e_philhealthno, data.e_tinno, data.e_fname, data.e_lname, data.e_mname, data.e_suffix, data.e_birthdate, data.e_gender, data.e_civil_status, data.e_dateemployed, data.e_provincialadd, data.Perhomeadd, data.e_email, data.e_mobile_number, data.Status, data.jt_name]);
            db.insertWithId(str, function(err, response) {
                if (err) {
                    callback(err, null);
                }
                callback(null, data.e_idno);
            });
        },
        function(e_idno, callback) {
            console.log('e_idno', e_idno);
            //var e_id = e_idno;
            var str = mysql.format('INSERT into employee_family_background(EmployeeID, EmergencyContactPerson, EmergencyTelNo) values(?, ?, ?);', [e_idno, data.EmergencyContactPerson, data.EmergencyTelNo]);
            db.query(str, function(err, response) {
                if (err) {
                    callback(err, null);
                }
                callback(null, response);
            });
        }
    ], next);
};

// exports.addProfilePic = function(device_no, file, next) {
//     var str = mysql.format('UPDATE employees set Photo = ? WHERE e_idno = ?;', [file, device_no]);
//     db.query(str, function(err, response){
//         if(err) {
//             next(err, null);
//         }
//         console.log('response', response);
//         next(null, response);
//     });
// };

exports.showEmployees = function(next) {
    var str = mysql.format('SELECT distinct e.device_no AS "Employee ID", CONCAT(e.e_lname, ", ", e.e_fname," ", LEFT(e.e_mname, 1),".",e.e_suffix,"  " ) AS Name, j.jt_name AS "Job Title", d.d_name AS "Department", s.Status AS "Status" FROM employees e, job_titles j, departments d, employment_status s where e.jt_id = j.jt_id and e.s_id = s.StatusID order by e.e_idno;');
    db.query(str, function(err, response) {
        if (err) {
            next(err, null);
        }
        next(null, response);
    });
};

exports.showSpecificEmployee = function(e_idno, next) {
    var str = mysql.format('SELECT distinct e.device_no AS "Employee ID", CONCAT(e.e_lname, ", ", e.e_fname," ", LEFT(e.e_mname, 1),".",e.e_suffix,"  " ) AS Name, j.jt_name AS "Job Title", d.d_name AS "Department", s.Status AS "Status" FROM employees e, job_titles j, departments d, employment_status s where e.e_lname like lower(?"%") and e.jt_id = j.jt_id and e.s_id = s.StatusID or e.e_idno = ? and e.jt_id = j.jt_id and e.s_id = s.StatusID;', [e_idno, e_idno]);
    //console.log("sdvs ". str)
    db.query(str, function(err, response) {
        if (err) {
            next(err, null);
        }
        next(null, response);
    });
};

exports.getProfilePicture = function(device_no, next) {
    var str = mysql.format('SELECT Photo from employees where device_no = ?', [device_no]);
    db.query(str, function(err, response) {
        if (err) {
            next(err, null);
        }
        var buffer = new Buffer(response);
        var bufferBase64 = buffer.toString('base64');
        next(null, bufferBase64);
    });
};

exports.editEmployee = function(e_idno, data, next) {
    //===================== updating employee in employees table =================//
    async.waterfall([
        function(callback) {
            var str = mysql.format('UPDATE employees SET e_idno = ?, device_no = ?, e_ssno = ?, e_gsisno = ?, e_pagibigno = ?, e_philhealthno = ?, e_tinno = ?, e_fname = ?, e_lname = ?, e_mname = ?, e_suffix = ?, e_birthdate = ?, e_gender = ?, e_civil_status = ?, e_dateemployed = ?, e_provincialadd = ?, Perhomeadd = ?, e_email = ?, e_mobile_number = ?, e_datemodified = (SELECT NOW()), jt_id = (SELECT jt_id from job_titles where jt_name = ?), s_id = (SELECT StatusID from employment_status where Status = ?) WHERE e_idno = ?;', [data.e_idno, data.e_idno, data.e_ssno, data.e_gsisno, data.e_pagibigno, data.e_philhealthno, data.e_tinno, data.e_fname, data.e_lname, data.e_mname, data.e_suffix, data.e_birthdate, data.e_gender, data.e_civil_status, data.e_dateemployed, data.e_provincialadd, data.Perhomeadd, data.e_email, data.e_mobile_number, data.jt_name, data.Status, e_idno]);
            db.insertWithId(str, function(err, response) {
                if (err) {
                    callback(err, null);
                }
                callback(null, data.e_idno);
            });
        },
        function(e_idno, callback) {
            var str = mysql.format('UPDATE employee_family_background SET EmployeeID = ?, EmergencyContactPerson = ?, EmergencyTelNo = ? WHERE EmployeeID = ?;', [e_idno, data.EmergencyContactPerson, data.EmergencyTelNo, e_idno]);
            db.query(str, function(err, response) {
                if (err) {
                    callback(err, null);
                }
                callback(null, response);
            });
        }
    ], next);

};

exports.assignWorkSchedule = function([e_idno, data], next) {
    var str = mysql.format('UPDATE employees SET ScheduleID = ? where e_idno = ?;', [data.ScheduleID, e_idno]);
    db.query(str, function(err, response) {
        if (err) {
            next(err, null);
        }
        next(null, response);
    });
};

exports.assignDivision = function(e_idno, data, next) {
    console.log(data)
    var str = mysql.format('UPDATE employees SET division_id = ? where e_idno = ?;', [data.division_id, e_idno]);
    db.query(str, function(err, response) {
        if (err) {
            next(err, null);
        }
        next(null, response);
    });
};

exports.getAttendanceMonitoring = function(e_idno, next) {
    var str = mysql.format('SELECT TimeLog FROM hr_pi.time_logs where EmployeeID = ? order by TimeLog desc;', [e_idno]);
    db.query(str, function(err, response) {
        if(err){
            next(err, null);
        }
        next(null, response)
    })
}