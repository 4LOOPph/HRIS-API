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

exports.deletePayroll = function onRequest(req, res) {
	payroll.deletePayroll(req.params.PayrollID, cb.setupResponseCallback(res));
};

exports.showSpecificPayrollbyID = function onRequest(req, res) {
	payroll.showSpecificPayrollbyID(req.params.PayrollID, cb.setupResponseCallback(res));
};

exports.showSpecificPayrollbyCode = function onRequest(req, res) {
	payroll.showSpecificPayrollbyCode(req.params.PayrollCode, cb.setupResponseCallback(res));
};

exports.showSpecificPayrollbyUsedYear = function onRequest(req, res) {
	payroll.showSpecificPayrollbyUsedYear(req.params.usedYear, cb.setupResponseCallback(res));
};

exports.showSpecificPayrollbyUsedMonth = function onRequest(req, res) {
	payroll.showSpecificPayrollbyUsedMonth(req.params.usedMonth, cb.setupResponseCallback(res));
};