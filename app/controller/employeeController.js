'use strict';

var employeeDao = require('./../dao/employeeDao');

function Employee() {
    this.epmployeeDao = employeeDao;
}


Employee.prototype.addEmployee = function(data, next) {    
    employeeDao.addEmployee(data, function(err, response) {
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

Employee.prototype.showEmployees = function(next) {    
    employeeDao.showEmployees(function(err, response) {
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

Employee.prototype.addProfilePic = function(device_no, file, next) {    
    employeeDao.addProfilePic(device_no, file, function(err, response) {
        if (err) {
            next({
                msg: err.message,
                result: err,
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

Employee.prototype.showSpecificEmployee = function(e_idno, next) {    
    employeeDao.showSpecificEmployee(e_idno, function(err, response) {
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

Employee.prototype.getProfilePicture = function(device_no, next) {    
    employeeDao.getProfilePicture(device_no, function(err, response) {
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

Employee.prototype.editEmployee = function([data, e_idno], next) {    
    employeeDao.editEmployee([data, e_idno], function(err, response) {
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
exports.Employee = Employee;
