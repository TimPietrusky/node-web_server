// Load the Object of the "http" module
var http = require('http');

// Create a HTTP server
// - request comes from the client
// - response goes to the client
http.createServer(function (request, response) {

  // Send the HTTP status code "200 - ok" to the request 
  // and set the content type to "text/plain"
  response.writeHead(200, {'Content-Type': 'text/plain'});

  // Tell the server that everything has been send to the client
  // so that the server considers this message as complete
  response.end('Hello World');

// Accept connections on port & IP
}).listen(1337, '127.0.0.1');

// Tell the user what is happening
console.log('Server running at http://127.0.0.1:1337/');