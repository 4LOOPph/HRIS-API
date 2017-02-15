'use strict';

var personDao = require('./../dao/personDao');

function Person() {
    this.personDao = personDao;
}

Person.prototype.getPerson = function(next) {    
    personDao.getPerson(function(err, response) {
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









Person.prototype.createPerson = function(data, next) {    
    personDao.createPerson(data, function(err, response) {
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








Person.prototype.getSpecificPerson = function(user_id, next) {    
    personDao.getSpecificPerson(user_id, function(err, response) {
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

Person.prototype.updatePerson = function(data, next) {    
    personDao.updatePerson(data, function(err, response) {
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

Person.prototype.deletePerson = function(user_id, next) {    
    personDao.deletePerson(user_id, function(err, response) {
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

exports.Person = Person;
