'use strict';

process.env.TZ = 'UTC';

require('./config/env')();
var env = process.env.NODE_ENV || 'development';
process.env.NODE_ENV = env;


var application = require('./config/application'),
    express = require('express'),
    bunyan = require('bunyan'),
    middleware = require('./app/utils/middleware'),
    config = require('./config/environment/' + env),
    log = bunyan.createLogger({
        name: 'app_name_here'
    }),
    http = require('http'),
    app = express(),
    server = http.createServer(app);

var router = express.Router({
    strict: true,
    caseSensitive: true
});

require(application.utils + 'helper')(app, log, config);
require(application.config + 'express')(app, config);
// Routes
require(application.routes + 'user')(app, config, middleware);
require(application.routes + 'employee')(app, config, middleware);
require(application.routes + 'payroll')(app,config, middleware);
require(application.routes + 'workSchedule')(app,config, middleware);
require(application.routes + 'attendance')(app,config, middleware);
require(application.routes + 'jobTitle')(app,config, middleware);
require(application.routes + 'division')(app,config, middleware);
require(application.routes + 'status')(app,config, middleware);
require(application.routes + 'company')(app,config, middleware);
require(application.routes + 'department')(app,config, middleware);
require(application.routes + 'dtr')(app,config, middleware);
module.exports = app;
