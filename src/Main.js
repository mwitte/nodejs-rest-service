process.title = 'node-restservice';

var http = require('http');

var mysql = require('mysql');
var util = require('util');

var DispatcherClass = require('./modules/Dispatcher');
var Dispatcher = new DispatcherClass();

http.createServer(Dispatcher.dispatch.bind(Dispatcher)).listen(3000, 'localhost');
