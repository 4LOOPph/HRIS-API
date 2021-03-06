/*jshint camelcase: false */
'use strict';
var fs = require('fs')
var person = require('./routing/person');
var user = require('./routing/user');
module.exports = function(app, config, middleware) {

    app.route('/')
        .get(function onRequest(req, res) {
            res.render('index');
        });

    app.route('/doc')
        .get(function onRequest(req, res) {
            var file = 'public/docs/api/index.html';
            fs.readFile(file, 'utf8', function(err, data) {
                if (err) {
                    console.log('Error: ' + err);
                    return;
                }
                res.send(data);
            });
        });

    app.route('/doc-v1')
        .get(function onRequest(req, res) {
            var file = 'public/docs/api/swagger.json';
            console.log('file: ', file);
            fs.readFile(file, 'utf8', function(err, data) {
                if (err) {
                    console.log('Error: ' + err);
                    return;
                }
                data = JSON.parse(data);
                res.send(data);
            });
        });

    app.route(config.api_version + '/user')    
        .get(user.User_login);


    //console.log(config.api_version + '/person')
    app.route(config.api_version + '/person')    
        .post(person.createPerson)
        .get(person.getPerson);


    app.route(config.api_version + '/person/:user_id')
        .get(person.getSpecificPerson)
        .put(person.updatePerson)
        .delete(person.deletePerson);

}
