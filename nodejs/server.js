var 
    http = require('http'),
    dbDriver = require('mongojs');

var dbUri = 'mongodb://admin:admin@ds063919.mongolab.com:63919/trialdb';
var db = dbDriver.connect(dbUri, 'SampleCollection');

function requestHandler(req, res) {

}

var server = http.createServer(requestHandler);

