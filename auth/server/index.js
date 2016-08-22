// Starting point for application

const express = require('express');
const http    = require('http');
const parser  = require('body-parser');
const morgan  = require('morgan');

const router  = require('./router');

const app = express();

// App setup

app.use(morgan('combined'));
app.use(parser.json({ type: "*/*" }));

router(app);

// Server setup

const port = process.env.PORT || 3090;

const server = http.createServer(app);

server.listen(port);

console.log(`Server listening on port ${port}`);