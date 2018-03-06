var http = require("http");

http.createServer(function (request,response){
    // Send http header
    // http status 200 OK
    // Content type test/plain
    response.writeHead(200,{'Content-Type':'text/plain'});

    // send the response body as  "Hello World"
    response.end('Howdy World !\n');
}).listen(8080);

// COnsole log
console.log("Server running at http://localhost:8080");