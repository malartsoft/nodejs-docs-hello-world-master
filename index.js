var http = require('http');






var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});




tran hoan lamádasd

















    response.end("123");lam

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);