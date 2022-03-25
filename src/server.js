'use strict';

const logRoute = require('./middleware/logger');
const seriesRouter = require('../routes/series');
const gamesRouter = require('../routes/games');
const error404 = require('./error-handlers/404');
const error500 = require('./error-handlers/500');

const express = require('express');
const app = express();

app.use(express.json());

app.use(logRoute);

app.use(seriesRouter);
app.use(gamesRouter);

app.use(error404);
app.use(error500);

module.exports = {
  app,
  start: (PORT) => app.listen(PORT, () => console.log(`Server listening on port ${PORT}`)),
};
