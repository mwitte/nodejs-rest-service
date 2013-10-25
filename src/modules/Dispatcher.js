var mysql = require('mysql');
var util = require('util');
var AddressBookClass = require('./AddressBook');

var Dispatcher = function(){
    this.connection = mysql.createConnection({
        host    : 'localhost',
        user    : 'node',
        password: 'node',
        database: 'node_rest_service'
    });
    this.connection.connect();
};
module.exports = Dispatcher;


Dispatcher.prototype.dispatch = function(request, response){
    response.setHeader('Content-Type', 'application/json; charset=utf-8');

    var url = request.url.split('/');

    switch (url[1]){
        case 'addresses':
            var addressBook = new AddressBookClass(this.connection, this.success, this.error);
            addressBook.dispatch(request, response);
            break;
        default:
            this.error(response, 404, util.format('%s not found', url[1]));
    }
};

Dispatcher.prototype.success = function(response, code, data){
    response.statusCode = code;
    response.end(JSON.stringify(data));
};

Dispatcher.prototype.error = function(response, code, message){
    response.statusCode = code;
    response.end(util.format('{%s}', message));
};