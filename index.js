const http = require('http');
let app = require('./routes');

http.createServer(app.handleRequest).listen(8000, () => {
    console.log('Server started on port: 8000');
});