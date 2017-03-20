'use strict';

var dtrDao = require('./../dao/dtrDao');

function Dtr() {
    this.dtrDao = dtrDao;
}

Dtr.prototype.DailyTimeRecord = function(EmployeeID, query_data, next) {    
    dtrDao.DailyTimeRecord(EmployeeID, query_data, function(err, response) {
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

Dtr.prototype.insertToTimeKeeping = function(data, next) {    
    dtrDao.insertToTimeKeeping(data, function(err, response) {
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

exports.Dtr = Dtr;