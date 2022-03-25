'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('series', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    installments: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
