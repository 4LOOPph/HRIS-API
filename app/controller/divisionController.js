'use strict';

var divisionDao = require('./../dao/divisionDao');

function Division() {
    this.divisionDao = divisionDao;
}

Division.prototype.createDivision= function(data, next) {    
    divisionDao.createDivision(data, function(err, response) {
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

Division.prototype.showDivision= function(next) {    
    divisionDao.showDivision(function(err, response) {
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

Division.prototype.editDivision= function(div_id, data, next) {    
    divisionDao.editDivision(div_id, data, function(err, response) {
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

Division.prototype.deleteDivision= function(div_id, next) {    
    divisionDao.deleteDivision(div_id, function(err, response) {
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

Division.prototype.showSpecificDivision= function(div_name, next) {    
    divisionDao.showSpecificDivision(div_name, function(err, response) {
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
exports.Division = Division;