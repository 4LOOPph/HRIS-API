exports.validateEmploymentStatus = function(req, res, next) {
    req.checkBody('StatusCode', 'Please provide Status Code').notEmpty();
    req.checkBody('Status', 'Please provide Status name').notEmpty();

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