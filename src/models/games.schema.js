'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('games', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    seriesId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    platform: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
