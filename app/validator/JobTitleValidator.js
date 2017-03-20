exports.validateJobTitle= function(req, res, next) {
    req.checkBody('jt_name', 'Please provide Job Title').notEmpty();

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