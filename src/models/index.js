'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const ICollection = require('./lib/ICollection');
const seriesSchema = require('./series.schema');
const gamesSchema = require('./games.schema');

const DATABASE_URL = process.env.NODE_ENV === 'test' ?
  'sqlite::memory' :
  process.env.DATABASE_URL || 'postgresql://localhost:5432/api-db';

const sequelize = new Sequelize(DATABASE_URL);
const SeriesModel = seriesSchema(sequelize, DataTypes);
const GamesModel = gamesSchema(sequelize, DataTypes);

SeriesModel.hasMany(GamesModel, { foreignKey: 'seriesId', sourceKey: 'id' });
GamesModel.belongsTo(SeriesModel, { foreignKey: 'seriesId', targetKey: 'id' });

module.exports = {
  sequelize,
  seriesCollection: new ICollection(SeriesModel),
  gamesCollection: new ICollection(GamesModel),
};
