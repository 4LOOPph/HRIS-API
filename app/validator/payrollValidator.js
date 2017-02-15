'use strict';

exports.validatePayroll = function(req, res, next) {
    req.checkBody('PayrollCode', 'Please provide PayrollCode').notEmpty();
    req.checkBody('UsedMonth', 'Please provide Month').notEmpty();
    req.checkBody('UsedYear', 'Please provide Year').notEmpty();
    req.checkBody('Term', 'Please provide Term').notEmpty();
    req.checkBody('FirstDate', 'Please provide starting date').notEmpty();
    req.checkBody('SecondDate', 'Please provide end date').notEmpty();

    var errors = req.validationErrors();
    if (errors) {
        res.status(400).send({
            response: { 
                result: errors,
                msg: '',
                success: false
            },
            statusCode: 400
        });
    } else {
        next();
    }
};