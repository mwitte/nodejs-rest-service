process.title = 'node-restservice';

var ConfigClass = require('./config/Config');
var config = new ConfigClass();

var DispatcherClass = require('./modules/Dispatcher');
var Dispatcher = new DispatcherClass();

var http = require('http');
http.createServer(Dispatcher.dispatch.bind(Dispatcher)).listen(config.webserver.port, config.webserver.host);
