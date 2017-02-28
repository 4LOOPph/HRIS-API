'use strict';
var fs = require('fs');

//========= validator ============//
//var validatorPayroll = require('./../validator/payrollValidator');


//=========== routes ===================//      
var department = require('./routing/department');


module.exports = function(app, config, middleware) {
    
    app.route(config.api_version + '/createDepartment')    
        .post(department.createDepartment);

    app.route(config.api_version + '/showDepartments')    
        .get(department.showDepartment);

    app.route(config.api_version + '/editDepartment/:d_id')    
        .put(department.editDepartment);

    app.route(config.api_version + '/deleteDepartment/:d_id')    
        .delete(department.deleteDepartment);

    app.route(config.api_version + '/showSpecificDepartment/:d_name')    
        .get(department.showSpecificDepartment);

};