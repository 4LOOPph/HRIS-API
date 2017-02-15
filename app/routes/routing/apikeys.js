'use strict';

var cb = require('./../../../utils/callback');
var apiKeysCtrl = require('../../../controllers/API/apiKeysController').APIKeys;
var apikeys = new apiKeysCtrl();

exports.renewAPIKeys = function onRequest(req, res) {
    if (req.sub_id) {
        apikeys.renewAPIKeys(req.sub_id, cb.setupResponseCallback(res));
    } else {
        res.sendStatus(401);
    }
};

exports.getAllAPIKeys = function onRequest(req, res) {
    console.log('req.sub_id: ',req.sub_id);
    if (req.sub_id) {
        apikeys.getAllAPIKeys(req.sub_id, cb.setupResponseCallback(res));
    } else {
        res.sendStatus(401);
    }
};
