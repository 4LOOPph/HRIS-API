'use strict';
var fs = require('fs');

//========= validator ============//
//var validatorPayroll = require('./../validator/payrollValidator');


//=========== routes ===================//      
var workSchedule = require('./routing/workSchedule');


module.exports = function(app, config, middleware) {
    
    app.route(config.api_version + '/workSchedule')    
        .get(workSchedule.showAllWorkSchedule)
        .post(workSchedule.createWorkSchedule);

    app.route(config.api_version + '/workSchedule/:SchedID')    
        .put(workSchedule.editWorkSchedule)
        .delete(workSchedule.deleteWorkSchedule);

    
};