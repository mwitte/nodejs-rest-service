var mysql = require('mysql');
var util = require('util');

var AddressBook = function(){
    this.connection = mysql.createConnection({
        host    : 'localhost',
        user    : 'node',
        password: 'node',
        database: 'node_rest_service'
    });
    this.connection.connect();
};
module.exports = AddressBook;


AddressBook.prototype.dispatcher = function(request, response){
    response.setHeader('Content-Type', 'application/json; charset=utf-8');

    var url = request.url.split('/');

    if(url[1] !== 'addresses'){
        this.error(response, 404, util.format('%s not found', url[1]));
        return false;
    }

    switch (request.method){
        case 'GET':
            var id = url.length > 2 ? url[2] : null;
            this.getAddress(response, id);
            break;
        default:
            this.error(response, 405, 'Method not allowed');
    }
};


AddressBook.prototype.error = function(respsone, code, message){
    respsone.statusCode = code;
    respsone.end(util.format('{%s}', message));
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
        response.statusCode = 200;
        response.end(JSON.stringify(processQueryResult(lines)));
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