'use strict';

var mysql = require('mysql');
var Database = require('./../../app/utils/database').Database;
var db = new Database();

exports.showAllPayrollPeriod = function(next) {
    var str = mysql.format('SELECT PayrollCode AS "Period Code", UsedMonth AS "Month", UsedYear AS "Year", Term AS "Payroll Term", concat(FirstDate," to ",SecondDate) AS "Date Covered" from payroll order by PayrollID desc;');
    db.query(str, function(err, response) {
        if (err) {
            next(err, null);
        }
        next(null, response);
    });
};

exports.createPayroll = function(data, next) {
    var str = mysql.format('select * from payroll_setup;');
    db.query(str, function(err, rows) {
        if (err) {
            throw err;
        } else {
            setValue(rows[0].SetupID);
        }
    });

    function setValue(value) {
        var str = mysql.format('Insert into payroll(PayrollCode, UsedMonth, UsedYear, Term, FirstDate, SecondDate, SetupID)' +
            'values(?, ?, ?, ?, ?, ?, ?);', [data.PayrollCode, data.UsedMonth, data.UsedYear, data.Term, data.FirstDate, data.SecondDate, value]);
        db.query(str, function(err, response) {
            if (err) {
                next(err, null);
            }
            next(null, response);
        });
    };
};

exports.editPayrollConfig = function([PayrollID, data], next) {
    var str = mysql.format('UPDATE payroll SET PayrollCode = ?, UsedMonth = ?, UsedYear = ?, Term = ?, FirstDate = ?, SecondDate = ?, SetupID = ?, PaymentTypes = ?, CategoryID = ? WHERE PayrollID = ?;', [data.PayrollCode, data.UsedMonth, data.UsedYear, data.Term, data.FirstDate, data.SecondDate, forSetupID, forPaymentTypes, forCategoryID, PayrollID]);
    db.query(str, function(err, response) {
        if (err) {
            next(err, null);
        }
        next(null, response);
    });
};

exports.deletePayroll = function(PayrollID, next) {
    var str = mysql.format('DELETE from Payroll WHERE PayrollID = ?;', [PayrollID]);
    db.query(str, function(err, response) {
        if (err) {
            next(err, null);
        }
        next(null, response);
    });
};

exports.showSpecificPayrollbyID = function(PayrollID, next) {
    var str = mysql.format('SELECT PayrollCode AS "Period Code", UsedMonth AS "Month", UsedYear AS "Year", Term AS "Payroll Term", concat(FirstDate," to ",SecondDate) AS "Date Covered" from payroll where PayrollID = ?;', [PayrollID]);
    db.query(str, function(err, response) {
        if (err) {
            next(err, null);
        }
        next(null, response);
    });
};
///////taronga
exports.showSpecificPayrollbyCode = function(PayrollCode, next) {
    var str = mysql.format('SELECT PayrollCode AS "Period Code", UsedMonth AS "Month", UsedYear AS "Year", Term AS "Payroll Term", concat(FirstDate," to ",SecondDate) AS "Date Covered" from payroll where PayrollCode like lower("%"?"%");', [PayrollCode]);
    db.query(str, function(err, response) {
        if (err) {
            next(err, null);
        }
        next(null, response);
    });
};

exports.showSpecificPayrollbyUsedYear = function(usedYear, next) {
    var str = mysql.format('SELECT PayrollCode AS "Period Code", UsedMonth AS "Month", UsedYear AS "Year", Term AS "Payroll Term", concat(FirstDate," to ",SecondDate) AS "Date Covered" from payroll where UsedYear like "%"?"%";', [usedYear]);
    db.query(str, function(err, response) {
        if (err) {
            next(err, null);
        }
        next(null, response);
    });
};

exports.showSpecificPayrollbyUsedMonth = function(usedMonth, next) {
    var str = mysql.format('SELECT PayrollCode AS "Period Code", UsedMonth AS "Month", UsedYear AS "Year", Term AS "Payroll Term", concat(FirstDate," to ",SecondDate) AS "Date Covered" from payroll where UsedMonth like lower("%"?"%");', [usedMonth]);
    db.query(str, function(err, response) {
        if (err) {
            next(err, null);
        }
        next(null, response);
    });
};

