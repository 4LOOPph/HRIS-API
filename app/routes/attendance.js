'use strict';
var fs = require('fs');

//========= validator ============//
//var validatorPayroll = require('./../validator/payrollValidator');


//=========== routes ===================//      
var attendance = require('./routing/attendance');


module.exports = function(app, config, middleware) {
    
    app.route(config.api_version + '/attendance/:e_idno')    
        .post(attendance.attendance);

    app.route(config.api_version + '/TimeKeep/:e_idno')    
        .post(attendance.timeKeep);

};