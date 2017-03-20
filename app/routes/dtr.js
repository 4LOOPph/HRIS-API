var dtr = require('./routing/dtr');


module.exports = function(app, config, middleware) {

    app.route(config.api_version + '/DailyTimeRecord/:EmployeeID')    
        .get(dtr.DailyTimeRecord);

    app.route(config.api_version + '/insertToTimeKeeping')
    	.post(dtr.insertToTimeKeeping)

};