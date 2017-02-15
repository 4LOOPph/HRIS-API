'use strict';

var cb = require('./../../utils/callback');
var personCtrl = require('./../../controller/personController').Person;
var person = new personCtrl();

exports.getPerson = function onRequest(req, res) {
    person.getPerson(cb.setupResponseCallback(res));
};

exports.createPerson = function onRequest(req, res) {
	//console.log(req);
    person.createPerson(req.body, cb.setupResponseCallback(res));
};

exports.getSpecificPerson = function onRequest(req, res) {
	console.log('req.params.user_id', req.params.user_id);
    person.getSpecificPerson(req.params.user_id, cb.setupResponseCallback(res));
};

exports.updatePerson = function onRequest(req, res) {
	//console.log('req.params.user_id', req.params.user_id);
    //console.log('req.body', req.body);
    person.updatePerson([req.params.user_id, req.body], cb.setupResponseCallback(res));
};

exports.deletePerson = function onRequest(req, res) {
    person.deletePerson(req.params.user_id, cb.setupResponseCallback(res));
};