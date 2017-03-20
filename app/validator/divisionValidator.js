'use strict';

exports.validateDivision= function(req, res, next) {
    req.checkBody('div_code', 'Please provide Division Code').notEmpty();
    req.checkBody('div_name', 'Please provide Division Name').notEmpty();

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