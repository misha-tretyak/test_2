let url = require('url');

module.exports = {
    handleRequest: function (req, res) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        let path = url.parse(req.url).pathname;

        switch (path) {
            case '/load':
                const obj = {};
                for ( let i = 0; i < 2000000; ++i) {
                    obj[i] = {
                        [Math.random()]: Math.random()
                    };
                }
                const jsonString = JSON.stringify(obj);
                const obj2 = JSON.parse(jsonString);
                res.end();
                break;
            default:
                res.writeHead(404);
                res.write('Route not found');
                res.end();
        }
    }
};