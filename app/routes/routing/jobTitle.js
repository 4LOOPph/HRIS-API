'use strict';

var cb = require('./../../utils/callback');
var jobTitleCtrl = require('./../../controller/jobTitleController').JobTitle;
var jobTitle = new jobTitleCtrl();

exports.createJobTitle = function onRequest(req, res) {
    jobTitle.createJobTitle(req.body, cb.setupResponseCallback(res));
};

exports.showjobTitles = function onRequest(req, res) {
    jobTitle.showjobTitles(cb.setupResponseCallback(res));
};

exports.JobTitleName = function onRequest(req, res) {
    jobTitle.JobTitleName(cb.setupResponseCallback(res));
};

exports.editJobTitle = function onRequest(req, res) {
    jobTitle.editJobTitle(req.body, req.params.jt_id, cb.setupResponseCallback(res));
};

exports.deleteJobTitle = function onRequest(req, res) {
    jobTitle.deleteJobTitle(req.params.jt_id, cb.setupResponseCallback(res));
};

exports.showSpecificJobTitle = function onRequest(req, res) {
    jobTitle.showSpecificJobTitle(req.params.jt_name, cb.setupResponseCallback(res));
};