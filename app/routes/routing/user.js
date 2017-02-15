'use strict';

var cb = require('./../../utils/callback');
var userCtrl = require('./../../controller/userController').User;
var user = new userCtrl();


exports.User_login = function onRequest(req, res) {
	//console.log('req.body', req.body);
    user.User_login(req.body, cb.setupResponseCallback(res));
};



