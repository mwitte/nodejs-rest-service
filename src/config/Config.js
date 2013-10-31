var Config = function(){
    this.webserver = {
        host: 'localhost',
        port: 3000
    };
    this.database = {
        host: 'localhost',
        user: 'node',
        password: 'node',
        name: 'node_rest_service'
    };
};
module.exports = Config;