'use strict';

var mysql = require('mysql');
var Database = require('./../../app/utils/database').Database;
var db = new Database();

exports.showAllPayrollPeriod = function(next) {
    var str = mysql.format('SELECT PayrollCode AS "Period Code", UsedMonth AS "Month", UsedYear AS "Year", Term AS "Payroll Term", concat(FirstDate," to ",SecondDate) AS "Date Covered" from payroll order by PayrollID desc;');
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        next(null, response);
    });
};
//ask about the 17
var forSetupID = 17, forPaymentTypes, forCategoryID;
exports.createPayroll = function(data, next) {
    var str = mysql.format('Insert into payroll(PayrollCode, UsedMonth, UsedYear, Term, FirstDate, SecondDate, SetupID, PaymentTypes, CategoryID)'+
        'values(?, ?, ?, ?, ?, ?, ?, ?, ?);', 
        [data.PayrollCode, data.UsedMonth, data.UsedYear, data.Term, data.FirstDate, data.SecondDate, forSetupID, forPaymentTypes, forCategoryID]);
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        next(null, response);
    });
};

exports.editPayrollConfig = function([PayrollID, data], next) {   
    //===================== updating employee in employees table =================//
    var str = mysql.format('UPDATE payroll SET PayrollCode = ?, UsedMonth = ?, UsedYear = ?, Term = ?, FirstDate = ?, SecondDate = ?, SetupID = ?, PaymentTypes = ?, CategoryID = ? WHERE PayrollID = ?;',
    [data.PayrollCode, data.UsedMonth, data.UsedYear, data.Term, data.FirstDate, data.SecondDate, forSetupID, forPaymentTypes, forCategoryID, PayrollID]);
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        next(null, response);
    });
};