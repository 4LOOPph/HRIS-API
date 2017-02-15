'use strict';

var cb = require('./../../utils/callback');
var employeeCtrl = require('./../../controller/employeeController').Employee;
var employee = new employeeCtrl();


//================ uplaoding file =========//
var multer = require('multer');
var mkdirp = require('mkdirp');


// exports.addProfilePic = function onRequest(req, res) {
//    // console.log('hello');
//     var directory = 'public/uploads';
   
//         mkdirp(directory, function(err) {
//             if (err) {
//                 console.log("ERROR! Can't make the directory! \n" + err);
//             }
//         });
    

//     var storage = multer.diskStorage({
//         destination: function(req, file, cb) {
//             cb(null, directory);
//         },
//         filename: function(req, file, cb) {
//             cb(null, Math.floor(Date.now() / 1000) + '-' + file.originalname);
//         }
//     });

//     var upload = multer({
//         storage: storage
//     }).single('file');

//     upload(req, res, function(err) {
//         if (err) {
//             return res.status(500).json({
//                 response: err,
//                 statusCode: 500
//             });
//         }
//         console.log('hgjhg', req.file)
//         employee.addProfilePic(req.params.device_no, req.file, cb.setupResponseCallback(res));
//     });

// };

//=======================

exports.addEmployee = function onRequest(req, res) {
	//console.log('req.body', req.body);
    employee.addEmployee(req.body, cb.setupResponseCallback(res));
};

exports.showEmployees = function onRequest(req, res) {
    employee.showEmployees(cb.setupResponseCallback(res))
};

exports.addProfilePic = function onRequest(req, res) {
	//console.log('awdawd',req.file)
    employee.addProfilePic(req.params.device_no, req.file, cb.setupResponseCallback(res));
};

exports.showSpecificEmployee = function onRequest(req, res) {
    employee.showSpecificEmployee(req.params.e_idno, cb.setupResponseCallback(res));
};

exports.getProfilePicture = function onRequest(req, res) {
    employee.getProfilePicture(req.params.device_no, cb.setupResponseCallback(res));
};

exports.editEmployee = function onRequest(req, res) {
    employee.editEmployee([req.params.e_idno, req.body], cb.setupResponseCallback(res));
};
