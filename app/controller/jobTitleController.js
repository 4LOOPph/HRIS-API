'use strict';

var jobTitleDao = require('./../dao/jobTitleDao');

function JobTitle() {
    this.jobTitleDao = jobTitleDao;
}

JobTitle.prototype.createJobTitle = function(data, next) {    
    jobTitleDao.createJobTitle(data, function(err, response) {
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

JobTitle.prototype.showjobTitles = function(next) {    
    jobTitleDao.showjobTitles(function(err, response) {
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

JobTitle.prototype.JobTitleName = function(next) {    
    jobTitleDao.JobTitleName(function(err, response) {
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

JobTitle.prototype.deleteJobTitle = function(jt_id, next) {    
    jobTitleDao.deleteJobTitle(jt_id, function(err, response) {
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

JobTitle.prototype.showSpecificJobTitle = function(jt_name, next) {    
    jobTitleDao.showSpecificJobTitle(jt_name, function(err, response) {
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
exports.JobTitle = JobTitle;