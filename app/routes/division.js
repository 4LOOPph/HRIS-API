'use strict';
var fs = require('fs');

//========= validator ============//
var validatorDivision = require('./../validator/divisionValidator');


//=========== routes ===================//      
var division = require('./routing/division');


module.exports = function(app, config, middleware) {
    
    app.route(config.api_version + '/createDivision')    
        .post(validatorDivision.validateDivision, division.createDivision);

    app.route(config.api_version + '/division')    
        .get(division.showDivision);

    app.route(config.api_version + '/editDivision/:div_id')    
         .put(validatorDivision.validateDivision, division.editDivision);

    app.route(config.api_version + '/deleteDivision/:div_id')    
         .delete(division.deleteDivision);

    app.route(config.api_version + '/showSpecificDivision/:div_name')    
         .get(division.showSpecificDivision);

};