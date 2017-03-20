'use strict';
var fs = require('fs');

//========= validator ============//
var validatorJobTitle = require('./../validator/JobTitleValidator');


//=========== routes ===================//      
var jobTitle = require('./routing/jobTitle');


module.exports = function(app, config, middleware) {
    
    app.route(config.api_version + '/createJobTitle')    
        .post(validatorJobTitle.validateJobTitle, jobTitle.createJobTitle);

    app.route(config.api_version + '/showAllJobTitle')     
        .get(jobTitle.showjobTitles);

    app.route(config.api_version + '/showJobTitleNames')    
        .get(jobTitle.JobTitleName);

    app.route(config.api_version + '/editJobTitle/:jt_id')    
        .put(validatorJobTitle.validateJobTitle, jobTitle.editJobTitle);

    app.route(config.api_version + '/deleteJobTitle/:jt_id')
        .delete(jobTitle.deleteJobTitle);

    app.route(config.api_version + '/showSpecificJobTitle/:jt_name')    
        .get(jobTitle.showSpecificJobTitle);
};