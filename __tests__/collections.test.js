'use strict';

// const supertest = require('supertest');
// const server = require('../src/server.js');
const { sequelize, seriesCollection, gamesCollection } = require('../src/models/index.js');

// const request = supertest(server.app);

beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.drop();
});

describe('Testing the /series route', () => {
  test('should create a series', async () => {
    const seriesInstance = await seriesCollection
      .create({
        name: 'Adventures in Testing',
        genre: 'RPG',
        installments: 3,
      });

    expect(seriesInstance.name).toEqual('Adventures in Testing');
    expect(seriesInstance.genre).toEqual('RPG');
    expect(seriesInstance.installments).toEqual(3);
  });

  test('should get all series', async () => {
    const seriesInstances = await seriesCollection.readAll();

    expect(seriesInstances[0].dataValues.name).toEqual('Adventures in Testing');
    expect(seriesInstances[0].genre).toEqual('RPG');
    expect(seriesInstances[0].installments).toEqual(3);
  });

  test('should get a specific series', async () => {
    const seriesInstance = await seriesCollection.read(1);

    expect(seriesInstance.name).toEqual('Adventures in Testing');
    expect(seriesInstance.genre).toEqual('RPG');
    expect(seriesInstance.installments).toEqual(3);
  });

  test('should update a specific series', async () => {
    const seriesInstance = await seriesCollection.update({
      genre: 'Action RPG',
    }, 1);

    expect(seriesInstance.genre).toEqual('Action RPG');
  });

  test('should delete a specific series', async () => {
    const seriesInstance = await seriesCollection.delete(1);

    expect(seriesInstance.name).toEqual('Adventures in Testing');
  });
});

describe('Testing the /games route', () => {
  test('should create a game', async () => {
    let seriesInstance = await seriesCollection
      .create({
        name: 'Adventures in Testing',
        genre: 'RPG',
        installments: 3,
      });
    console.log(seriesInstance.id);
    const gameInstance = await gamesCollection
      .create({
        name: 'Adventures in Testing: Origins',
        seriesId: seriesInstance.id,
        platform: 'PC',
        year: 2020,
      });
    console.log(gameInstance);
    expect(gameInstance.name).toEqual('Adventures in Testing: Origins');
    expect(gameInstance.platform).toEqual('PC');
    expect(gameInstance.year).toEqual(2020);
  });

  test('should get all games', async () => {
    const gameInstances = await gamesCollection.readAll();

    expect(gameInstances[0].dataValues.name).toEqual('Adventures in Testing: Origins');
    expect(gameInstances[0].platform).toEqual('PC');
    expect(gameInstances[0].year).toEqual(2020);
  });

  test('should get a specific game', async () => {
    const gameInstance = await gamesCollection.read(1);

    expect(gameInstance.name).toEqual('Adventures in Testing: Origins');
    expect(gameInstance.platform).toEqual('PC');
    expect(gameInstance.year).toEqual(2020);
  });

  test('should update a specific game', async () => {
    const gameInstance = await gamesCollection.update({
      platform: 'PC/MAC',
    }, 1);

    expect(gameInstance.platform).toEqual('PC/MAC');
  });

  test('should delete a specific game', async () => {
    const gameInstance = await gamesCollection.delete(1);

    expect(gameInstance.name).toEqual('Adventures in Testing: Origins');
  });
});

