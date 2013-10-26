var mysql = require('mysql');
var util = require('util');
var querystring = require('querystring');

var PersistedEntity = function(connection, tableName){
    this.connection = connection;
    this.tableName = tableName;
};
module.exports = PersistedEntity;

/**
 * Find specific line
 * @param id
 * @param response
 * @param callback
 */
PersistedEntity.prototype.findById = function (id, response, callback) {
    var query = util.format(' SELECT * from %s', this.tableName);
    query += util.format(' WHERE id = "%s"', id);
    this.connection.query(query, function(err, lines){
        if(err) {
            callback(response, null, err);
        }else{
            callback(response, processQueryResult(lines), null);
        }
    }.bind(this));
};

/**
 * Finds all lines
 * @param limit
 * @param response
 * @param callback
 */
PersistedEntity.prototype.findAll = function (limit, response, callback) {
    var query = util.format(' SELECT * from %s', this.tableName);
    if(limit){
        query += util.format(' LIMIT %d', limit);
    }
    this.connection.query(query, function(err, lines){
        if(err) {
            callback(response, null, err);
        }else{
            callback(response, processQueryResult(lines), null);
        }
    }.bind(this));
};

/**
 * Adds a new line
 * @param request
 * @param response
 * @param callback
 */
PersistedEntity.prototype.add = function (request, response, callback){
    request.on('data', function(data){
        var values = querystring.parse(data.toString());
        var query = util.format('INSERT INTO  %s SET ?', this.tableName);
        this.connection.query(query, values, function(error, result){

            if(error) {
                callback(response, null, error);
            }else{
                values.id = result.insertId;
                callback(response, values, null);
            }
        }.bind(this));
    }.bind(this));
};

/**
 * Updates a line
 * @param request
 * @param response
 * @param callback
 */
PersistedEntity.prototype.update = function (request, response, callback){
    request.on('data', function(data){
        var values = querystring.parse(data.toString());
        var query = util.format('UPDATE %s SET ?', this.tableName);
        query += util.format(' WHERE id = %d', values.id);
        this.connection.query(query, values, function(error, result){

            if(error) {
                callback(response, null, error);
            }else{
                callback(response, values, null);
            }
        }.bind(this));
    }.bind(this));
};

/**
 * Deletes a line
 * @param request
 * @param response
 * @param callback
 */
PersistedEntity.prototype.delete = function (request, response, callback){
    request.on('data', function(data){
        var values = querystring.parse(data.toString());
        var query = util.format('DELETE FROM %s WHERE id = %d', this.tableName, values.id);
        this.connection.query(query, values, function(error, result){

            if(error) {
                callback(response, null, error);
            }else{
                callback(response, values, null);
            }
        }.bind(this));
    }.bind(this));
};

/**
 * Creates an array of the raw sql lines
 * @param lines
 * @returns {Array}
 */
function processQueryResult(lines){
    var result = [];
    for (var i = 0; i < lines.length; i += 1){
        var singleLine = {};
        //var singleLine = [];
        for(var property in lines[i]){
            if (typeof lines[i][property] === 'function'){ continue; }
            singleLine[util.format('%s', property)] = util.format('%s', lines[i][property]);
        }
        result.push(singleLine);
    }
    return result;
}