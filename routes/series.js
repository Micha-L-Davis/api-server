'use strict';
const express = require('express');
const router = express.Router();
const { seriesCollection } = require('../src/models');


router.post('/series', async (request, response, next) => {
  let newSeriesData = request.body;

  let responseData = await seriesCollection.create(newSeriesData);
  response.send(responseData);
});

router.get('/series/:id', async (request, response, next) => {
  let query = request.params;

  let responseData = await seriesCollection.read(query);
  response.send(responseData);
});

router.get('/series', async (request, response, next) => {
  let responseData = await seriesCollection.readAll();
  response.send(responseData);
});

router.put('/series/:id', async (request, response, next) => {
  let updateData = request.body;
  let query = request.params;

  let responseData = await seriesCollection.update(updateData, query);
  response.send(responseData);
});

router.delete('/series/:id', async (request, response, next) => {
  let query = request.params;

  let responseData = await seriesCollection.delete(query);
  response.send(responseData);
});

module.exports = router;
