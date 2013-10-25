var mysql = require('mysql');
var util = require('util');

var AddressBook = function(connection, successCallback, errorCallback){
    this.connection = connection;
    this.success = successCallback;
    this.error = errorCallback;
};
module.exports = AddressBook;

AddressBook.prototype.dispatch = function(request, response){
    var url = request.url.split('/');
    switch (request.method){
        case 'GET':
            var id = url.length > 2 ? url[2] : null;
            this.getAddress(response, id);
            break;
        default:
            this.error(response, 405, 'Method not allowed');
    }
};

AddressBook.prototype.getAddress = function (response, id) {
    var query = 'SELECT * from addresses';
    if(id){
        query += util.format(' WHERE id = "%s"', id);
    }
    this.connection.query(query, function(err, lines){
        if(err) {
            this.error(response, 500, err.code);
        }
        this.success(response, 200, processQueryResult(lines));
    }.bind(this));
};

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