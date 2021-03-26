'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    title: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    host: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ticketPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Categories'},
    },
  }, {});
  Event.associate = function(models) {
    // 1:Many, Category <> Events, one category type can be set on many event entries
    Event.belongsTo(models.Category, { foreignKey: 'categoryId'});

    // 1:Many, Event <> Registrations, one event has many registration entries
    Event.hasMany(models.Registration, { foreignKey: 'eventId'});
  };
  return Event;
};
