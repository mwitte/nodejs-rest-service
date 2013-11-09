var mysql = require('mysql');
var util = require('util');
var querystring = require('querystring');

var PersistedEntity = function(connection, callback, tableName){
    this.connection = connection;
    this.callback = callback;
    this.tableName = tableName;
};
module.exports = PersistedEntity;

/**
 * Dispatches the different http request methods
 * @param request
 * @param response
 */
PersistedEntity.prototype.dispatch = function(request, response){
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
            callback(response, processQueryResult(lines)[0], null);
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
                var result = 'http://' + request.headers.host + '/' + this.tableName + '/' + result.insertId;
                callback(response, {url: result}, null);
            }
        }.bind(this));
    }.bind(this));
};

/**
 * Updates a line and fill response with new entity data
 * @param request
 * @param response
 * @param callback
 */
PersistedEntity.prototype.update = function (request, response, callback){
    var url = request.url.split('/');
    var id = url.length > 2 ? url[2] : null;
    request.on('data', function(data){
        var values = querystring.parse(data.toString());
        var query = util.format('UPDATE %s SET ?', this.tableName);
        query += util.format(' WHERE id = %d', id);
        this.connection.query(query, values, function(error, result){

            if(error) {
                callback(response, null, error);
            }else{
                this.findById(id, response, callback);
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
    var url = request.url.split('/');
    var id = url.length > 2 ? url[2] : null;
    var query = util.format('DELETE FROM %s WHERE id = %d', this.tableName, id);
    this.connection.query(query, function(error, result){
        if(error) {
            callback(response, null, error);
        }else{
            callback(response, {}, null);
        }
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