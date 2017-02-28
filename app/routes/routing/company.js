'use strict';

var cb = require('./../../utils/callback');
var companyCtrl = require('./../../controller/companyController').Company;
var company = new companyCtrl();

exports.createCompany = function onRequest(req, res) {
    company.createCompany(req.body, cb.setupResponseCallback(res));
};

exports.editCompanySetting = function onRequest(req, res) {
    company.editCompanySetting(req.params.ci_name, req.body, cb.setupResponseCallback(res));
};

exports.showCompanyInformation = function onRequest(req, res) {
    company.showCompanyInformation(cb.setupResponseCallback(res));
};

exports.deleteCompany = function onRequest(req, res) {
    company.deleteCompany(req.params.ci_id, cb.setupResponseCallback(res));
};

exports.showSpecificCompany = function onRequest(req, res) {
    company.showSpecificCompany(req.params.ci_name, cb.setupResponseCallback(res));
};
