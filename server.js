const express = require('express');
const helmet = require('helmet');
const server = express();
const morgan = require('morgan');

server.use(express.json());
server.use(helmet());
server.use(morgan());

//==== TESTING API END POINT ====
server.get('/', (req, res) => {
    res.send('API Running...');
  });

  module.exports = server;