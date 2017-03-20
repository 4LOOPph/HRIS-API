'use strict';

var cb = require('./../../utils/callback');
var dtrCtrl = require('./../../controller/dtrController').Dtr;
var dtr = new dtrCtrl();

exports.DailyTimeRecord = function onRequest(req, res) {
    dtr.DailyTimeRecord(req.params.EmployeeID, req.query, cb.setupResponseCallback(res));
};

exports.insertToTimeKeeping = function onRequest(req, res) {
    dtr.insertToTimeKeeping(req.body, cb.setupResponseCallback(res));
};