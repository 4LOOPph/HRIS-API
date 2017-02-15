'use strict';

var payrollDao = require('./../dao/payrollDao');

function Payroll() {
    this.payrollDao = payrollDao;
}
Payroll.prototype.showAllPayrollPeriod = function(next) {    
    payrollDao.showAllPayrollPeriod(function(err, response) {
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

Payroll.prototype.createPayroll = function(data, next) {    
    payrollDao.createPayroll(data, function(err, response) {
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

Payroll.prototype.editPayrollConfig = function([data, PayrollID], next) {    
    payrollDao.editPayrollConfig([data, PayrollID], function(err, response) {
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

exports.Payroll = Payroll;