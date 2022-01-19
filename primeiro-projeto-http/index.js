const http = require('http');

const server = http.createServer();

server.on('request', (req, resp) => {
    resp.end('<p style="color: red">Ola mundo!</p>')
});

server.listen(3000, () => console.log('server is running...'));