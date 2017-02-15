'use strict';

var workScheduleDao = require('./../dao/workScheduleDao');

function WorkSchedule() {
    this.workScheduleDao = workScheduleDao;
}

WorkSchedule.prototype.showAllWorkSchedule = function(next) {    
    workScheduleDao.showAllWorkSchedule(function(err, response) {
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

WorkSchedule.prototype.createWorkSchedule = function(data, next) {    
    workScheduleDao.createWorkSchedule(data, function(err, response) {
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

WorkSchedule.prototype.editWorkSchedule = function(data, SchedID, next) {    
    workScheduleDao.editWorkSchedule(data, SchedID, function(err, response) {
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

WorkSchedule.prototype.deleteWorkSchedule = function(SchedID, next) {    
    workScheduleDao.deleteWorkSchedule(SchedID, function(err, response) {
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
exports.WorkSchedule = WorkSchedule;