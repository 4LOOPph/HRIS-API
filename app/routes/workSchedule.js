'use strict';
var fs = require('fs');

//========= validator ============//
//var validatorPayroll = require('./../validator/payrollValidator');


//=========== routes ===================//      
var workSchedule = require('./routing/workSchedule');


module.exports = function(app, config, middleware) {
    
    app.route(config.api_version + '/showAllWorkSchedule')    
        .get(workSchedule.showAllWorkSchedule);

    app.route(config.api_version + '/createWorkSchedule')    
        .post(workSchedule.createWorkSchedule);

    app.route(config.api_version + '/editWorkSchedule/:SchedID')    
        .put(workSchedule.editWorkSchedule);

    app.route(config.api_version + '/deleteWorkSchedule/:SchedID')    
        .delete(workSchedule.deleteWorkSchedule);

    app.route(config.api_version + '/showWorkTimeSchedule/:SchedID')    
        .get(workSchedule.showWorkTimeSchedule);

    app.route(config.api_version + '/createTimeSchedule')    
        .post(workSchedule.createTimeSchedule);
};