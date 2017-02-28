'use strict';
var fs = require('fs');

//========= validator ============//
//var validatorPayroll = require('./../validator/payrollValidator');


//=========== routes ===================//      
var company = require('./routing/company');


module.exports = function(app, config, middleware) {
    
    app.route(config.api_version + '/createCompanySetting')
    	.post(company.createCompany);    
       
    app.route(config.api_version + '/editCompanySetting/:ci_name')
    	.put(company.editCompanySetting);

    app.route(config.api_version + '/showCompanyInformation')
    	.get(company.showCompanyInformation);  

    app.route(config.api_version + '/deleteCompany/:ci_id')
    	.delete(company.deleteCompany);

    app.route(config.api_version + '/showSpecificCompany/:ci_name')
    	.get(company.showSpecificCompany);
};