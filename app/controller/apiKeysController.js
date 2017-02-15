'use strict';

var keysDao = require('../../daos/API/apiKeysDao');

function APIKeys() {
    this.keysDao = keysDao;
}

APIKeys.prototype.renewAPIKeys = function(sub_id, next) {    
    keysDao.renewAPIKeys(sub_id,function(err, response) {
        if (err) {
            next({
                result: err,
                msg: err.message,
                success: false
            }, null);
        }

        next(null, {
            result: response,
            msg: 'Record Successfully Updated',
            success: true
        });
    });
};

APIKeys.prototype.getAllAPIKeys = function(sub_id,next) {
    console.log('req.sub_id: ',sub_id);

    keysDao.getAllAPIKeys(sub_id, function(err, response) {
        if (err) {
            next({
                result: err,
                msg: err.message,
                success: false
            }, null);
        }

        next(null, {
            result: response,
            msg: '',
            success: true
        });
    });
};


exports.APIKeys = APIKeys;
