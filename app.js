const http = require('http');
const express = require('express');
const socket = require('socket.io');
const bodyParser = require('body-parser');
const moment = require('moment');
const port = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.json());

//Prevents CORS errors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Acess-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Method', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }

  return next();
});

// PORTAL
app.post('/api/development/portal', (req, res, next) => {
  io.emit('/api/development/portal', {date: moment()});
  return res.send(null);
});

app.post('/api/staging/portal', (req, res, next) => {
  io.emit('/api/staging/portal', {date: moment()});
  return res.send(null);
});

app.post('/api/production/portal', (req, res, next) => {
  io.emit('/api/production/portal', {date: moment()});
  return res.send(null);
});

app.post('/api/development/backend', (req, res, next) => {
  io.emit('/api/development/backend', {date: moment()});
  return res.send(null);
});

// BACKEND
app.post('/api/staging/backend', (req, res, next) => {
  io.emit('/api/staging/backend', {date: moment()});
  return res.send(null);
});

app.post('/api/production/backend', (req, res, next) => {
  io.emit('/api/production/backend', {date: moment()});
  return res.send(null);
});

// TOPPERS
app.post('/api/development/toppers', (req, res, next) => {
  io.emit('/api/development/toppers', {date: moment()});
  return res.send(null);
});

app.post('/api/staging/toppers', (req, res, next) => {
  io.emit('/api/staging/toppers', {date: moment()});
  return res.send(null);
});

app.post('/api/production/toppers', (req, res, next) => {
  io.emit('/api/production/toppers', {date: moment()});
  return res.send(null);
});

// SMOKES
app.post('/api/development/smokes', (req, res, next) => {
  io.emit('/api/development/smokes', {date: moment()});
  return res.send(null);
});

app.post('/api/staging/smokes', (req, res, next) => {
  io.emit('/api/staging/smokes', {date: moment()});
  return res.send(null);
});

app.post('/api/production/smokes', (req, res, next) => {
  io.emit('/api/production/smokes', {date: moment()});
  return res.send(null);
});

// CF
app.post('/api/development/cf', (req, res, next) => {
  io.emit('/api/development/cf', {date: moment()});
  return res.send(null);
});

app.post('/api/staging/cf', (req, res, next) => {
  io.emit('/api/staging/cf', {date: moment()});
  return res.send(null);
});

app.post('/api/production/cf', (req, res, next) => {
  io.emit('/api/production/cf', {date: moment()});
  return res.send(null);
});

const server = http.createServer(app);
const io = socket.listen(server, {pingTimeout: 30000});

server.listen(port);
