const http = require('http');

const hostname = '0.0.0.0'; // This allows the server to bind to all network interfaces
const port = 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello I am Rizalyn Lajada, SAIT ID 000905612.I am in my 3rd semester now. Thank you.\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

