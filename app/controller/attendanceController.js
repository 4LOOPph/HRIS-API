'use strict';

var attendanceDao = require('./../dao/attendanceDao');

function Attendance() {
    this.attendanceDao = attendanceDao;
}

Attendance.prototype.attendance = function(e_idno, next) {    
    attendanceDao.attendance(e_idno, function(err, response) {
        if (err) {
            next({
                result: err,
                msg: err.message,
                success: false
            }, null);
        }
        next(null, {
            result: response,
            msg: 'dzfgchvbjkl',
            success: true
        });
    });
};

Attendance.prototype.showDTR = function(EmployeeID, query_data, next) {    
    attendanceDao.showDTR(EmployeeID, query_data, function(err, response) {
        if (err) {
            next({
                result: err,
                msg: err.message,
                success: false
            }, null);
        }
        next(null, {
            result: response,
            msg: 'dzfgchvbjkl',
            success: true
        });
    });
};

exports.Attendance = Attendance;