const http = require('http');

const hostname = '0.0.0.0'; // This allows the server to bind to all network interfaces
const port = 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello I am Rizalyn Lajada, SAIT ID 000905612. This is the project 3 on Virtualization.\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

