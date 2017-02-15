'use strict';

var cb = require('./../../utils/callback');
var payrollCtrl = require('./../../controller/payrollController').Payroll;
var payroll = new payrollCtrl();

exports.showAllPayrollPeriod = function onRequest(req, res) {
    payroll.showAllPayrollPeriod(cb.setupResponseCallback(res));
};

exports.createPayroll = function onRequest(req, res) {
    payroll.createPayroll(req.body, cb.setupResponseCallback(res));
};

exports.editPayrollConfig = function onRequest(req, res) {
    payroll.editPayrollConfig([req.params.PayrollID, req.body], cb.setupResponseCallback(res));
};