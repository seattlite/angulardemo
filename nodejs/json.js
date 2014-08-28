var http = require('http');
var url = require('url');
var server = http.createServer(function(request, response){
    var urlData = url.parse(request.url, true);
    var date = urlData.query.iso;
    var objDate = new Date(date);
    var result;
    if (urlData.pathname == '/api/parsetime') {
        result = {
            hour: objDate.getHours(),
            minute: objDate.getUTCMinutes(),
            second: objDate.getUTCSeconds()
        };
        console.log(JSON.stringify(result));
    }
    else if (urlData.pathname  =='/api/unixtime') {
        result = {unixtime: Date.parse(date)};
    }
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(result), 'utf8');
});


function superfunction(){
for ()
{
}

}


server.listen(process.argv[2]);
