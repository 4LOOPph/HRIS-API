exports.validateCompany = function(req, res, next) {
    req.checkBody('ci_name', 'Please provide Company Name').notEmpty();
    req.checkBody('office_code', 'Please provide Office Code').notEmpty();

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