import http from 'http';

http.createServer(function(req, res) {
    res.end(JSON.stringify({ data: 'hello world' }));
}).listen(25565, function() { console.log('httpserver run') });