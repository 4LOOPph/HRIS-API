'use strict';

exports.validateEmployee = function(req, res, next) {
    req.checkBody('e_idno', 'Please provide Employee ID').notEmpty();
    req.checkBody('e_mname', 'Please provide your middle name').notEmpty();
    req.checkBody('e_lname', 'Please provide your last name').notEmpty();
    req.checkBody('e_fname', 'Please provide your first name').notEmpty();
    req.checkBody('e_gender', 'Please provide gender specification').notEmpty();
    req.checkBody('age', 'Please provide your age').notEmpty();
    req.checkBody('e_birthdate', 'Please provide your Birth date').notEmpty();
    req.checkBody('Perhomeadd', 'Please provide Present Address').notEmpty();
    req.checkBody('e_provincialadd', 'Please provide Provincial Address').notEmpty();

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