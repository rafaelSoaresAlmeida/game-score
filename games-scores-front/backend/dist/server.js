"use strict";
exports.__esModule = true;
var jsonServer = require("json-server");
var http = require("http");
var auth_1 = require("./auth");
var authz_1 = require("./authz");
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();
// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.post('/user/login', auth_1.handleAuthentication);
server.post('/score/:game', authz_1.handleAuthorization);
server.get('/score/:game', function (req, res) {
    var game = req.param('game');
    res.jsonp(router.db.get('tetris').value());
});
// Use default router
server.use(router);
/* const options = {
  cert: fs.readFileSync('./backend/keys/cert.pem'),
  key: fs.readFileSync('./backend/keys/key.pem'),
}; */
var port = 5000;
http.createServer(server).listen(port, function () {
    console.log("JSON Server is running on http://localhost:" + port);
});
