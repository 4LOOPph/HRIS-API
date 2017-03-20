'use strict';
var fs = require('fs');

//========= validator ============//
var validatorEmploymentStatus = require('./../validator/employmentStatusValidator');


//=========== routes ===================//      
var status = require('./routing/status');


module.exports = function(app, config, middleware) {
    
    app.route(config.api_version + '/createEmploymentStatus')    
        .post(validatorEmploymentStatus.validateEmploymentStatus, status.createStatus);

    app.route(config.api_version + '/showAllEmploymentStatus') 
        .get(status.showStatus);

    app.route(config.api_version + '/editEmploymentStatus/:StatusID')    
        .put(validatorEmploymentStatus.validateEmploymentStatus, status.editStatus);

    app.route(config.api_version + '/deleteEmploymentStatus/:StatusID')
        .delete(status.deleteStatus);

    app.route(config.api_version + '/showAllEmploymentStatusNames') 
        .get(status.showStatusNames);

    app.route(config.api_version + '/showSpecificEmploymentStatus/:status') 
        .get(status.showSpecificEmploymentStatus);
        
};