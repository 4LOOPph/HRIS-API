'use strict';

var cb = require('./../../utils/callback');
var workScheduleCtrl = require('./../../controller/workScheduleController').WorkSchedule;
var workSchedule = new workScheduleCtrl();

exports.showAllWorkSchedule = function onRequest(req, res) {
    workSchedule.showAllWorkSchedule(cb.setupResponseCallback(res));
};

exports.createWorkSchedule = function onRequest(req, res) {
    workSchedule.createWorkSchedule(req.body, cb.setupResponseCallback(res));
};

exports.editWorkSchedule = function onRequest(req, res) {
    workSchedule.editWorkSchedule(req.body, req.params.SchedID, cb.setupResponseCallback(res));
};

exports.deleteWorkSchedule = function onRequest(req, res) {
    workSchedule.deleteWorkSchedule(req.params.SchedID, cb.setupResponseCallback(res));
};