/*jshint camelcase: false */
'use strict';
var fs = require('fs');

//========= validator ============//
var validatorEmployee = require('./../validator/employeeValidator');


//=========== routes ===================//      
var employee = require('./routing/employee');


module.exports = function(app, config, middleware) {

    app.route(config.api_version + '/employee')    
        .get(employee.showEmployees)
        .post(validatorEmployee.validateEmployee, employee.addEmployee);

        //cosole.log('fsdfddvs ' +config.api_version + '/employee/:e_idno')
    app.route(config.api_version + '/employee/:e_idno') 
        .get(employee.showSpecificEmployee);

    app.route(config.api_version + '/upload/:device_no') 
        .get(employee.getProfilePicture)
        .put(employee.addProfilePic)

    app.route(config.api_version + '/employee/:e_idno')
        .put(employee.editEmployee);
};