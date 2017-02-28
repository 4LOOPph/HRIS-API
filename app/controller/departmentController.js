'use strict';

var departmentDao = require('./../dao/departmentDao');

function Department() {
    this.departmentDao = departmentDao;
}

Department.prototype.createDepartment= function(data, next) {    
    departmentDao.createDepartment(data, function(err, response) {
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

Department.prototype.showDepartment= function(next) {    
    departmentDao.showDepartment(function(err, response) {
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

Department.prototype.editDepartment= function(d_id, data, next) {    
    departmentDao.editDepartment(d_id, data, function(err, response) {
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

Department.prototype.deleteDepartment= function(d_id, next) {    
    departmentDao.deleteDepartment(d_id, function(err, response) {
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

Department.prototype.showSpecificDepartment= function(d_name, next) {    
    departmentDao.showSpecificDepartment(d_name, function(err, response) {
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
exports.Department = Department;