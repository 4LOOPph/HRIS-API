'use strict';
var fs = require('fs');

//========= validator ============//
//var validatorPayroll = require('./../validator/payrollValidator');


//=========== routes ===================//      
var status = require('./routing/status');


module.exports = function(app, config, middleware) {
    
    app.route(config.api_version + '/createEmploymentStatus')    
        .post(status.createStatus);

    app.route(config.api_version + '/showAllEmploymentStatus') 
        .get(status.showStatus);

    app.route(config.api_version + '/editEmploymentStatus/:StatusID')    
        .put(status.editStatus);

    app.route(config.api_version + '/deleteEmploymentStatus/:StatusID')
        .delete(status.deleteStatus);

    app.route(config.api_version + '/showAllEmploymentStatusNames') 
        .get(status.showStatusNames);

    app.route(config.api_version + '/showSpecificEmploymentStatus/:status') 
        .get(status.showSpecificEmploymentStatus);
        
};