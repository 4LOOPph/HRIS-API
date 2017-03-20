/*jshint camelcase: false */
'use strict';
var fs = require('fs');

//========= validator ============//
var validatorEmployee = require('./../validator/employeeValidator');


//=========== routes ===================//      
var employee = require('./routing/employee');


module.exports = function(app, config, middleware) {

    app.route(config.api_version + '/showEmployees')    
        .get(employee.showEmployees);

    app.route(config.api_version + '/addEmployee')
        .post(validatorEmployee.validateEmployee, employee.addEmployee);

        //cosole.log('fsdfddvs ' +config.api_version + '/employee/:e_idno')
    app.route(config.api_version + '/showSpecificEmployee/:e_idno') 
        .get(employee.showSpecificEmployee);

    app.route(config.api_version + '/editEmployee/:e_idno') 
        .put(employee.editEmployee);

    app.route(config.api_version + '/employeeassignWorkSchedule/:e_idno')     
        .put(employee.assignWorkSchedule);

    app.route(config.api_version + '/getProfilePicture/:device_no') 
        .get(employee.getProfilePicture)

    app.route(config.api_version + '/addProfilePic/:device_no') 
        // .put(employee.addProfilePic);

    app.route(config.api_version + '/employeeassignDivision/:e_idno')     
        .put(employee.assignDivision);

    app.route(config.api_version + '/attendanceMonitoring/:EmployeeID') 
        .get(employee.getAttendanceMonitoring);

};