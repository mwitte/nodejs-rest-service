process.title = 'node-restservice';

var http = require('http');

var mysql = require('mysql');
var util = require('util');

var AddressBook = require('./modules/AddressBook');
var AddressBookInstance = new AddressBook();

http.createServer(AddressBookInstance.dispatcher.bind(AddressBookInstance)).listen(3000, 'localhost');
