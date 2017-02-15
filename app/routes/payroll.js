'use strict';
var fs = require('fs');

//========= validator ============//
var validatorPayroll = require('./../validator/payrollValidator');


//=========== routes ===================//      
var payroll = require('./routing/payroll');


module.exports = function(app, config, middleware) {
    
    app.route(config.api_version + '/payroll')    
        .get(payroll.showAllPayrollPeriod)
        .post(validatorPayroll.validatePayroll, payroll.createPayroll);

    app.route(config.api_version + '/payroll/:PayrollID')
        .put(validatorPayroll.validatePayroll, payroll.editPayrollConfig);
    
};