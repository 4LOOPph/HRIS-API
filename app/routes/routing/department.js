'use strict';

var cb = require('./../../utils/callback');
var departmentCtrl = require('./../../controller/departmentController').Department;
var department = new departmentCtrl();

exports.createDepartment = function onRequest(req, res) {
    department.createDepartment(req.body, cb.setupResponseCallback(res));
};

exports.showDepartment = function onRequest(req, res) {
    department.showDepartment(cb.setupResponseCallback(res));
};

exports.editDepartment = function onRequest(req, res) {
    department.editDepartment(req.params.d_id, req.body, cb.setupResponseCallback(res));
};

exports.deleteDepartment = function onRequest(req, res) {
    department.deleteDepartment(req.params.d_id, cb.setupResponseCallback(res));
};

exports.showSpecificDepartment = function onRequest(req, res) {
    department.showSpecificDepartment(req.params.d_name, cb.setupResponseCallback(res));
};