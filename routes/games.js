'use strict';

const express = require('express');
const router = express.Router();
const { gamesCollection } = require('../src/models');


router.post('/games', async (request, response, next) => {
  let newSeriesData = request.body;

  let responseData = await gamesCollection.create(newSeriesData);
  response.send(responseData);
});

router.get('/games/:id', async (request, response, next) => {
  let query = request.params;

  let responseData = await gamesCollection.read(query);
  response.send(responseData);
});

router.get('/games', async (request, response, next) => {
  let responseData = await gamesCollection.readAll();
  response.send(responseData);
});

router.put('/games/:id', async (request, response, next) => {
  let updateData = request.body;
  let query = request.params;

  let responseData = await gamesCollection.update(updateData, query);
  response.send(responseData);
});

router.delete('/games/:id', async (request, response, next) => {
  let query = request.params;

  let responseData = await gamesCollection.delete(query);
  response.send(responseData);
});

module.exports = router;
