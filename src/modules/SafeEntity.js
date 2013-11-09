var PersistedEntity = require('./PersistedEntity');
var util = require('util');

/**
 * This Safe Entity should only show how to extend the PersistedEntity and how overwrite some methods.
 * To safe resources this entity uses the same mysql table as the other "address" example
 *
 * @param connection
 * @param callback
 * @constructor
 */
var SafeEntity = function(connection, callback, tableName){
    // call parent constructor
    SafeEntity.super_.prototype.constructor.call(this, connection, callback, tableName);
};
module.exports = SafeEntity;
util.inherits(SafeEntity, PersistedEntity);


/**
 * Overwrite method to disallow an update action
 * @param request
 * @param response
 * @param callback
 */
SafeEntity.prototype.update = function (request, response, callback){
    callback(response, {message: 'not allowed'}, true);
};


/**
 * Overwrite method to disallow a delete action
 * @param request
 * @param response
 * @param callback
 */
SafeEntity.prototype.delete = function (request, response, callback){
    callback(response, {message: 'not allowed'}, true);
};