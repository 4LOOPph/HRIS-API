'use strict';

var mysql = require('mysql');
var Database = require('./../../app/utils/database').Database;
var db = new Database();
var async = require('async');

exports.DailyTimeRecord = function(EmployeeID, query_data, next) {
    var str = mysql.format('SELECT TimeLog FROM time_logs where LogDate >= (Select FirstDate from payroll where PayrollID = ?) and LogDate <= (Select SecondDate from payroll where PayrollID = ?) and (EmployeeID = ?);', [query_data.PayrollID, query_data.PayrollID, EmployeeID]);
    db.query(str, function(err, response) {
        if (err) {
            next(err, null);
        }     
        var str = mysql.format('SELECT FirstDate, SecondDate from payroll where PayrollID = ?', [query_data.PayrollID]);
        db.query(str, function(err, dates) {
            if (err) {
                return err;
            }
            var i = 0,
                n = 0,
                o = 0,
                res = [],
                lists_of_days = [],
                dtr = [],
                fdate = new Date(dates[0].FirstDate),
                sdate = new Date(dates[0].SecondDate),
                day_name = ['Sunday', 'Monday', 'Teusday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

            //========get all dates from Firstdate to SecondDate in paroll base on PayrollID====//
            while (fdate <= sdate) {
                lists_of_days.push(fdate.toISOString().substring(0, 10));
                fdate.setDate(fdate.getDate() + 1);
            }
            //========get all logdates with daynames====//
            while (i <= response.length - 1) {
                var temp = [];
                while (true) {
                    temp.push(response[i].TimeLog);
                    if (response[i + 1] == undefined) {
                        break;
                    }
                    if (temp[temp.length - 1].slice(0, 10) != response[i + 1].TimeLog.slice(0, 10)) {
                        break;
                    }
                    i++;
                }
                var day = new Date(temp[0])
                res.push(temp[0].slice(0, 10) + ' ' + day_name[day.getDay()])
                res.push(temp);
                i++;
            }
            //====syncronizing dates and logdate to become the dtr====//
            while (o<=lists_of_days.length-1) {
                if (lists_of_days[o] != res[n].slice(0, 10)) {
                    var dname = new Date(lists_of_days[o]);
                    dtr.push(lists_of_days[o] + ' ' + day_name[dname.getDay()]);
                    dtr.push([]);
                    o++;
                } else {
                    dtr.push(res[n]);
                    dtr.push(res[n + 1]);
                    n = n + 2;
                    o++;
                }
            }
            next(null, dtr);
        })

    })
}

exports.insertToTimeKeeping = function(data, next) {
    var str = mysql.format('Insert into time_keeping(EmployeeID, TransDate, PayrollID, Year, MonthID, Day, TimeIn, TimeOut, Totalhrs, Remarks, IsLate, TotalLate, IsUnderTime, IsHalfDay, TimeInActualDate, TimeOutActualDate, isHoliday, IsAbsent, TimeIn2, TimeOut2) '+
        'values(?, (select now()), ?, ?, ?, (Select case ? WHEN "Sunday" THEN 1 WHEN "Monday" THEN 2 WHEN "Teusday" THEN 3 WHEN "Wednesday" THEN 4 WHEN "Thursday" THEN 5 WHEN "Friday" THEN 6 WHEN "Saturday" THEN 7 END), ?, ?, TIME_FORMAT((SELECT TIMEDIFF(TIME_FORMAT(?,"%h:%i:%s"), TIME_FORMAT(?,"%h:%i:%s"))), "%h.%i"), ?, ?, ?, ?, ?, (select DATE_FORMAT(?,"%y-%m-%d")), (select DATE_FORMAT(?,"%y-%m-%d")), ?, ?, ?, ?)', 
        [data.EmployeeID, data.PayrollID,  data.Year, data.MonthID, data.Day, data.TimeIn, data.TimeOut, data.TimeOut, data.TimeIn, data.Remarks, data.IsLate, data.TotalLate, data.IsUnderTime, data.IsHalfDay, data.TimeIn, data.TimeIn, data.isHoliday, data.IsAbsent, data.TimeIn2, data.TimeOut2]);
    db.query(str, function(err, response){
        if(err){
            next(err, null);
        }
        next(null, response);
    })
}
