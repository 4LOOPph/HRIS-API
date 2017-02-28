'use strict';

var companyDao = require('./../dao/companyDao');

function Company() {
    this.companyDao = companyDao;
}

Company.prototype.createCompany = function(data, next) {    
    companyDao.createCompany(data, function(err, response) {
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

Company.prototype.editCompanySetting = function(ci_name, data, next) {    
    companyDao.editCompanySetting(ci_name, data, function(err, response) {
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

Company.prototype.showCompanyInformation = function(next) {    
    companyDao.showCompanyInformation(function(err, response) {
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

Company.prototype.deleteCompany = function(ci_id, next) {    
    companyDao.deleteCompany(ci_id, function(err, response) {
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

Company.prototype.showSpecificCompany = function(ci_name, next) {    
    companyDao.showSpecificCompany(ci_name, function(err, response) {
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

exports.Company = Company;