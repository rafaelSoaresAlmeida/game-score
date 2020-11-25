import * as jsonServer from 'json-server';
import { Express } from 'express';

import * as fs from 'fs';
import * as http from 'http';

import { handleAuthentication } from './auth';
import { handleAuthorization } from './authz';

const server: Express = jsonServer.create();

const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);

server.post('/user/login', handleAuthentication);
server.post('/score/:game', handleAuthorization);

server.get('/score/:game', function (req, res) {
  const game = req.param('game');
  res.jsonp(router.db.get('tetris').value());
});

// Use default router
server.use(router);

/* const options = {
  cert: fs.readFileSync('./backend/keys/cert.pem'),
  key: fs.readFileSync('./backend/keys/key.pem'),
}; */

const port = 5000;
http.createServer(server).listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
});
