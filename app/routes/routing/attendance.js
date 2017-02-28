'use strict';

var cb = require('./../../utils/callback');
var attendanceCtrl = require('./../../controller/attendanceController').Attendance;
var attendance = new attendanceCtrl();

exports.attendance = function onRequest(req, res) {
    attendance.attendance(req.params.e_idno, cb.setupResponseCallback(res));
};

exports.timeKeep = function onRequest(req, res) {
    attendance.timeKeep(req.params.e_idno, cb.setupResponseCallback(res));
};