'use strict';

var mysql = require('mysql');
var Database = require('./../../app/utils/database').Database;
var db = new Database();

exports.createCompany = function(data, next) {
    console.log(data)
    var str = mysql.format('Insert into company_info(ci_name, ci_acroname, ci_fax, ci_telephone, ci_city, ci_streetadd, ci_address, ci_provincialadd, ci_zipcode, ci_late_deduction, tp_id, ci_restday1, ci_restday2, ci_restday3, ci_reg_ot, ci_rd_ot, ci_work_sp, ci_work_sp_rd, ci_work_rh, ci_work_rh_rd, ci_ssno, ci_gsisno, ci_pagibigno, ci_tinno, ci_philhealthno, ci_apply_break_logs, ci_modifiedby, ci_datemodified, ci_owner, ci_website, ci_url, office_code)'+
    	'values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);',
        [data.ci_name, data.ci_acroname, data.ci_fax, data.ci_telephone, data.ci_city, data.ci_streetadd, data.ci_address, data.ci_provincialadd, data.ci_zipcode, data.ci_late_deduction, data.tp_id, data.ci_restday1, data.ci_restday2, data.ci_restday3, data.ci_reg_ot, data.ci_rd_ot, data.ci_work_sp, data.ci_work_sp_rd, data.ci_work_rh, data.ci_work_rh_rd, data.ci_ssno, data.ci_gsisno, data.ci_pagibigno, data.ci_tinno, data.ci_philhealthno, data.ci_apply_break_logs, data.ci_modifiedby, data.ci_datemodified, data.ci_owner, data.ci_website, data.ci_url, data.office_code]);
    
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        next(null, response);
    });
};

exports.editCompanySetting = function(ci_name, data, next) {
    var str = mysql.format('UPDATE company_info SET ci_name = ?, ci_acroname = ?, ci_fax = ?, ci_telephone = ?, ci_city = ?, ci_streetadd = ?, ci_address = ?, ci_provincialadd = ?, ci_zipcode = ?, ci_late_deduction = ?, tp_id = ?, ci_restday1 = ?, ci_restday2 = ?, ci_restday3 = ?, ci_reg_ot = ?, ci_rd_ot = ?, ci_work_sp = ?, ci_work_sp_rd = ?, ci_work_rh = ?, ci_work_rh_rd = ?, ci_ssno = ?, ci_gsisno = ?, ci_pagibigno = ?, ci_tinno = ?, ci_philhealthno = ?, ci_apply_break_logs = ?, ci_modifiedby = ?, ci_datemodified = ?, ci_owner = ?, ci_website = ?, ci_url = ?, office_code = ? WHERE ci_name = ?;',
        [data.ci_name, data.ci_acroname, data.ci_fax, data.ci_telephone, data.ci_city, data.ci_streetadd, data.ci_address, data.ci_provincialadd, data.ci_zipcode, data.ci_late_deduction, data.tp_id, data.ci_restday1, data.ci_restday2, data.ci_restday3, data.ci_reg_ot, data.ci_rd_ot, data.ci_work_sp, data.ci_work_sp_rd, data.ci_work_rh, data.ci_work_rh_rd, data.ci_ssno, data.ci_gsisno, data.ci_pagibigno, data.ci_tinno, data.ci_philhealthno, data.ci_apply_break_logs, data.ci_modifiedby, data.ci_datemodified, data.ci_owner, data.ci_website, data.ci_url, data.office_code, ci_name]); 
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        next(null, response);
    });
};

exports.showCompanyInformation = function(next) {
    var str = mysql.format('SELECT ci_name AS "Company Name", ci_fax AS "FAX", ci_telephone AS "Telephone", ci_website AS "Website", ci_owner AS "Owner", office_code AS "Office Code", ci_city AS "City", ci_streetadd AS "Street", ci_provincialadd AS "Provicial", ci_zipcode AS "Zipcode", ci_ssno AS "SSS No.", ci_gsisno AS "GSIS No.", ci_philhealthno AS "PhilHealth No.", ci_pagibigno AS "PAGIBIG No.", ci_tinno AS "TIN" FROM company_info'); 
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        next(null, response);
    });
};

exports.deleteCompany = function(ci_id, next) {
    var str = mysql.format('DELETE FROM company_info WHERE ci_id = ?;', [ci_id]); 
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        next(null, response);
    });
};

exports.showSpecificCompany = function(ci_name, next) {
    var str = mysql.format('SELECT ci_name AS "Company Name", ci_fax AS "FAX", ci_telephone AS "Telephone", ci_website AS "Website", ci_owner AS "Owner", office_code AS "Office Code", ci_city AS "City", ci_streetadd AS "Street", ci_provincialadd AS "Provicial", ci_zipcode AS "Zipcode", ci_ssno AS "SSS No.", ci_gsisno AS "GSIS No.", ci_philhealthno AS "PhilHealth No.", ci_pagibigno AS "PAGIBIG No.", ci_tinno AS "TIN" FROM company_info WHERE ci_name = lower(?"%")', [ci_name]); 
    db.query(str, function(err, response){
        if(err) {
            next(err, null);
        }
        next(null, response);
    });
};