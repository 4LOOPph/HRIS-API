'use strict';

var userDao = require('./../dao/userDao');

function User() {
    this.userDao = userDao;
}


User.prototype.User_login = function(data, next) {    
    userDao.User_login(data, function(err, response) {
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

exports.User = User;
