var mysql = require('mysql');
var util = require('util');
var PersistedEntity = require('./PersistedEntity');
var SafeEntity = require('./SafeEntity');
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

    var entity = this.getMappedEntity(url[1]);
    if(entity !== null){
        entity.dispatch(request, response);
    }else{
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

/**
 * Maps the identifiers to the entities
 * @param entityIdentifier
 * @returns {*}
 */
Dispatcher.prototype.getMappedEntity = function(entityIdentifier){
    switch (entityIdentifier){
        case 'address':
            var entity = new PersistedEntity(this.connection, this.callback, 'address');
            break;
        case 'safe':
            // cause this is only an example this uses the same table
            var entity = new SafeEntity(this.connection, this.callback, 'address');
            break;
        default:
            return null;
    }
    return entity;
}