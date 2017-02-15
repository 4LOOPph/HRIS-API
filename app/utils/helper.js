'use strict';

module.exports = function(app, log, config) {
    app.listen(config.port, function connection(err) {
        if (err instanceof Error) {
            log.error('Unable to start Server', config.port);
        } else {
        	console.log("config.db_name: ",config.db_name);
            log.info('Server started at ' + config.port + ' Using ' + config.api_version);
        }
    });
};
