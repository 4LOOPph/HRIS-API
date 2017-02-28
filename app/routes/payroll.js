'use strict';
var fs = require('fs');

//========= validator ============//
var validatorPayroll = require('./../validator/payrollValidator');


//=========== routes ===================//      
var payroll = require('./routing/payroll');


module.exports = function(app, config, middleware) {
    
    app.route(config.api_version + '/showAllPayrolls')    
        .get(payroll.showAllPayrollPeriod)

    app.route(config.api_version + '/addPayroll')     
        .post(validatorPayroll.validatePayroll, payroll.createPayroll);

    app.route(config.api_version + '/editPayroll/:PayrollID')
        .put(validatorPayroll.validatePayroll, payroll.editPayrollConfig)
        
    app.route(config.api_version + '/deletePayroll/:PayrollID')
        .delete(payroll.deletePayroll);

    app.route(config.api_version + '/showSpecificPayrollbyID/:PayrollID')    
        .get(payroll.showSpecificPayrollbyID);
    
    app.route(config.api_version + '/showSpecificPayrollbyCode/:PayrollCode')    
        .get(payroll.showSpecificPayrollbyCode);

    app.route(config.api_version + '/showSpecificPayrollbyUsedYear/:usedYear')    
        .get(payroll.showSpecificPayrollbyUsedYear);

    app.route(config.api_version + '/showSpecificPayrollbyUsedMonth/:usedMonth')    
        .get(payroll.showSpecificPayrollbyUsedMonth);
};