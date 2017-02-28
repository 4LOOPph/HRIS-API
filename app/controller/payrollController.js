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

Payroll.prototype.deletePayroll = function(PayrollID, next) {    
    payrollDao.deletePayroll( PayrollID, function(err, response) {
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

Payroll.prototype.showSpecificPayrollbyID = function(PayrollID, next) {    
    payrollDao.showSpecificPayrollbyID(PayrollID, function(err, response) {
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

Payroll.prototype.showSpecificPayrollbyCode = function(PayrollCode, next) {    
    payrollDao.showSpecificPayrollbyCode(PayrollCode, function(err, response) {
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

Payroll.prototype.showSpecificPayrollbyUsedYear = function(usedYear, next) {    
    payrollDao.showSpecificPayrollbyUsedYear(usedYear, function(err, response) {
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

Payroll.prototype.showSpecificPayrollbyUsedMonth = function(usedMonth, next) {    
    payrollDao.showSpecificPayrollbyUsedMonth(usedMonth, function(err, response) {
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