'use strict';

var cb = require('./../../utils/callback');
var divisionCtrl = require('./../../controller/divisionController').Division;
var division = new divisionCtrl();

exports.createDivision = function onRequest(req, res) {
    division.createDivision(req.body, cb.setupResponseCallback(res));
};

exports.showDivision = function onRequest(req, res) {
    division.showDivision(cb.setupResponseCallback(res));
};

exports.editDivision = function onRequest(req, res) {
    division.editDivision(req.params.div_id, req.body, cb.setupResponseCallback(res));
};

exports.deleteDivision = function onRequest(req, res) {
    division.deleteDivision(req.params.div_id, cb.setupResponseCallback(res));
};

exports.showSpecificDivision = function onRequest(req, res) {
    division.showSpecificDivision(req.params.div_name, cb.setupResponseCallback(res));
};