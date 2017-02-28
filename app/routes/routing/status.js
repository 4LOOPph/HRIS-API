'use strict';

var cb = require('./../../utils/callback');
var statusCtrl = require('./../../controller/statusController').Status;
var status = new statusCtrl();

exports.createStatus = function onRequest(req, res) {
    status.createStatus(req.body, cb.setupResponseCallback(res));
};

exports.showStatus = function onRequest(req, res) {
    status.showStatus(cb.setupResponseCallback(res));
};

exports.editStatus = function onRequest(req, res) {
    status.editStatus(req.params.StatusID, req.body, cb.setupResponseCallback(res));
};

exports.deleteStatus = function onRequest(req, res) {
    status.deleteStatus(req.params.StatusID, cb.setupResponseCallback(res));
};

exports.showStatusNames = function onRequest(req, res) {
    status.showStatusNames(cb.setupResponseCallback(res));
};

exports.showSpecificEmploymentStatus = function onRequest(req, res) {
    status.showSpecificEmploymentStatus(req.params.status, cb.setupResponseCallback(res));
};