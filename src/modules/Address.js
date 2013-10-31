var PersistedEntity = require('./PersistedEntity');
var util = require('util');

/**
 * @param connection
 * @param callback
 * @constructor
 */
var Address = function(connection, callback){
    this.callback = callback;

    // call parent constructor
    Address.super_.prototype.constructor.call(this, connection, 'address');
};
module.exports = Address;
util.inherits(Address, PersistedEntity);

/**
 * Dispatches the different http request methods
 * @param request
 * @param response
 */
Address.prototype.dispatch = function(request, response){
    switch (request.method){
        case 'GET':
            var url = request.url.split('/');
            var id = url.length > 2 ? url[2] : null;
            if(id){
                this.findById(id, response, this.callback);
            }else{
                this.findAll(null, response, this.callback);
            }
            break;
        case 'POST':
            this.add(request, response, this.callback);
            break;
        case 'PUT':
            this.update(request, response, this.callback);
            break;
        case 'DELETE':
            this.delete(request, response, this.callback);
            break;
        default:
            this.callback(response, null, true);
    }
};