var mysql = require('mysql');
var util = require('util');
var AddressClass = require('./Address');
var ConfigClass = require('../config/Config');
var config = new ConfigClass();


var Dispatcher = function(){
    this.connection = mysql.createConnection({
        host    : config.database.host,
        user    : config.database.user,
        password: config.database.password,
        database: config.database.name
    });
    this.connection.connect();
};
module.exports = Dispatcher;

/**
 * Dispatches the different entities
 * @param request
 * @param response
 */
Dispatcher.prototype.dispatch = function(request, response){
    response.setHeader('Content-Type', 'application/json; charset=utf-8');

    var url = request.url.split('/');

    switch (url[1]){
        case 'address':
            var address = new AddressClass(this.connection, this.callback);
            address.dispatch(request, response);
            break;
        default:
            response.statusCode = 500;
            response.end(util.format('{%s}', 'error'));
    }
};

/**
 * Callback method
 * @param response
 * @param data
 * @param error
 */
Dispatcher.prototype.callback = function(response, data, error){
    if(error){
        response.statusCode = 500;
        response.end(util.format('{%s}', 'error'));
    }else{
        response.statusCode = 200;
        response.end(JSON.stringify(data));
    }
};