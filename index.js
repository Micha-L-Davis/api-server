'use strict';

require('dotenv');
const { sequelize } = require('./src/models');
const server = require('./src/server');
const PORT = process.env.PORT || 3000;

sequelize.sync()
  .then(() => {
    server.start(PORT);
  })
  .catch(error => {
    console.log(error);
  });
